"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

const ToothSwiper = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-80">
          <ReactCompareImage
            leftImage=""
            rightImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mjzwcCxc7zAJ8HZ-1KCbnYLG6hApiQOFOw&s"
            sliderLineColor="#fff"
            sliderLineWidth={2}
          />
        </div>
        <div className="w-80">
          <ReactCompareImage
            leftImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZFXf50z1ByRPCNO3jeMrYlMH4gRUH3Ayrg&s"
            rightImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy8y4QgnXS1X_kJJjEyjsFgZc9oMpbqadkw&s"
          />
        </div>
      </div>
    </div>
  );
};

export default ToothSwiper;
