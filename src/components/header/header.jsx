import React from "react";
import './header.scss';
import 'bootstrap/dist/css/bootstrap.css';
import TopMenu from "../TopMenu/TopMenu";
import socketIOClient from 'socket.io-client';
import { useEffect, useState } from "react";

export default function Header() {
   const [activeSessions, setActiveSessions] = useState(0);

   useEffect(() => {
      const socket = socketIOClient('http://localhost:3000');
      socket.on('activeSessions', (count) => {
         setActiveSessions(count);
      });
      return () => {
         socket.disconnect();
      };
   }, []);

   return (
      <>
         <header className="header">
            <h4>Счетчик активных сессий: {activeSessions}</h4>
            <TopMenu />
         </header>
      </>
   );
};


