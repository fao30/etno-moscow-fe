import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={
        visible ? "transition-all fixed bottom-4 right-6 z-10" : "hidden"
      }
    >
      <div>
        <div
          onClick={scrollToTop}
          className="block themedText transition-all cursor-pointer hover:scale-105 hover:-translate-y-1"
        >
          <Icon icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
