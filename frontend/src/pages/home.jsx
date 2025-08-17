import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, TextField, Paper, Box, Avatar } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/Cafe2.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          zIndex: -1,
        },
      }}
    >
      {/* Top Navigation Bar */}
      <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px) saturate(100%)",
            WebkitBackdropFilter: "blur(14px) saturate(150%)",
            border: "1px solid rgba(255,255,255,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
        }}
        >


        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar sx={{ bgcolor: "#C69C72", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>
            <CoffeeIcon />
            </Avatar>
            <h2
            style={{
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#ffffff"
            }}
            >
            OneCoffee Meet
            </h2>
        </div>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <Button
            onClick={() => navigate("/history")}
            startIcon={<RestoreIcon />}
            sx={{
                bgcolor: "#C69C72",
                color: "#4B2E2E",
                px: 2.5,
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
                boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                bgcolor: "#b88963",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                },
            }}
            >
            History
            </Button>

            <Button
            onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
            }}
            sx={{
                bgcolor: "#C69C72",
                color: "#4B2E2E",
                px: 2.5,
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
                boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                bgcolor: "#b88963",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                },
            }}
            >
            Logout
            </Button>
        </div>
        </div>

      {/* Main Content */}
      <div className="meetContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          padding: "20px",
        }}
      >
        <Paper
        elevation={10}
        sx={{
            p: 4,
            borderRadius: "24px",
            maxWidth: 800,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 250, 245, 0.92)", // creamy latte
            boxShadow: "0px 8px 24px rgba(75, 46, 46, 0.25)",
        }}
        >
        {/* Left Panel */}
        <div style={{ flex: 1 }}>
            <h1 style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: "1.4",
            background: "linear-gradient(90deg, #4B2E2E, #C69C72)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            paddingLeft:"8px",
            }}>
            Grab Your Coffee & Let's Chat
            </h1>

            {/* Rounded Input + Button */}
            <div style={{
            display: 'flex',
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "50px",
            padding: "5px 10px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            width: "fit-content"
            }}>
            <TextField
                variant="standard"
                placeholder="Join Table"
                onChange={e => setMeetingCode(e.target.value)}
                InputProps={{
                disableUnderline: true,
                style: { padding: "8px 14px", fontSize: "1rem" }
                }}
                sx={{ minWidth: "200px" }}
            />
            <Button
                onClick={handleJoinVideoCall}
                sx={{
                ml: 2,
                px: 4,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #4B2E2E, #C69C72)",
                color: "#fff",
                "&:hover": {
                    background: "linear-gradient(90deg, #3b2323, #b88963)"
                }
                }}
            >
                Join
            </Button>
            </div>
        </div>

        {/* Right Panel */}
        <div style={{ 
            flex: 1, 
            textAlign: "center", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            padding: "20px" 
        }}>
            <img 
                src="/FriendsGroup.jpg" 
                alt="coffee chat" 
                style={{ 
                    maxWidth: "100%", 
                    height: "auto", 
                    borderRadius: "16px", 
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", 
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer"
                }} 
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.3)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
            />
        </div>

        </Paper>

      </div>
    </Box>
  );
}

export default withAuth(HomeComponent);
