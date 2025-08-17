import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        console.error("Failed to fetch history");
      }
    };
    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/Cafe3.jpg)', // cozy bg
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          zIndex: -1,
        },
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <IconButton
          onClick={() => routeTo("/home")}
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            borderRadius: "12px",
            color: "#FFF8F0",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.25)",
            },
          }}
        >
          <HomeIcon />
        </IconButton>
      </Box>

      {/* History List */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          maxWidth: 700,
          width: "100%",
        }}
      >
        {meetings.length !== 0 ? (
          meetings.map((e, i) => (
            <Card
              key={i}
              sx={{
                p: 2,
                borderRadius: "20px",
                background: "rgba(255,250,245,0.85)",
                backdropFilter: "blur(8px)",
                boxShadow: "0px 6px 20px rgba(75,46,46,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 10px 25px rgba(75,46,46,0.35)",
                },
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: "600", color: "#4B2E2E" }}
                >
                  Table: {e.meetingCode}
                </Typography>
                <Typography sx={{ mt: 1, color: "#6B4F4F" }}>
                  Date: {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "#FFF8F0",
              fontWeight: "500",
              mt: 10,
            }}
          >
            No coffee chats yet ☕ <br /> Start your first one today!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
