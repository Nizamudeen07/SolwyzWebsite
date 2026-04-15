"use client";

import React from 'react';

import './Loader.css';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50">
    <div className="card">
      <div className="loader text-white">
        <p>Create</p>
        <div className="words">
          <span className="word">Change</span>
          <span className="word">Value</span>
          <span className="word">Change</span>
          <span className="word">Value</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Loader;
