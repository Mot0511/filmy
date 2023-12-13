'use client'
import { useEffect } from "react";

export default function Player(config) {
    useEffect(() => {
        if (window.Playerjs) {
            new window.Playerjs(config);
          } else {
            if (!window.pjscnfgs) {
              window.pjscnfgs = {};
            }
            window.pjscnfgs[config.id] = config;
          }
          window.PlayerjsAsync = function () {
            if (window.pjscnfgs) {
              Object.entries(window.pjscnfgs).map(([key, value]) => {
                return new window.Playerjs(value);
              });
            }
            window.pjscnfgs = {};
          };
    }, [])
    
    return "";
  }
  