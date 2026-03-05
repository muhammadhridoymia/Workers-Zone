import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Your profile has been verified.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      text: "Rahim Uddin replied to your message.",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      text: "Site maintenance scheduled for tonight.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      text: "New worker matches your search criteria.",
      time: "2 days ago",
      read: false,
    },
    {
      id: 5,
      text: "Your last booking was successful.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 6,
      text: "Don't forget to update your profile.",
      time: "1 week ago",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    const updated = notifications.map((noti) =>
      noti.id === id ? { ...noti, read: true } : noti
    );
    setNotifications(updated);
  };

  return (
    <div className="notification-container">
        <Navbar />
      <h2>Notifications</h2>

      <div className="notification-list">
        {notifications.map((noti) => (
          <div
            key={noti.id}
            className={`notification-card ${noti.read ? "read" : "unread"}`}
            onClick={() => markAsRead(noti.id)}
          >
            <p>{noti.text}</p>
            <span>{noti.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;