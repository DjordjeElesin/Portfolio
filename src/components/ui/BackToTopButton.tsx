import { useEffect, useState } from "react";
import Button from "./Button";
import { AnimatePresence, animate } from "motion/react";
import * as motion from "motion/react-client";
import { CaretCircleUp } from "@phosphor-icons/react";

export default function BackToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 0.3,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-5"
        >
          <Button variant="primary" size="small" onClick={handleScrollToTop}>
            <CaretCircleUp size={30} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
