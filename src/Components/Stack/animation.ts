export const container = {
     hidden: { opacity: 0 },
     shoe: {
          opacity: 1,
          transition: {
               delayChildren: 1.5,
               staggerChildren: 1.2,
          },
     },
};

export const item = {
     hidden: { y: "100%" },
     show: { y: "0%", transition: { duration: 1 } },
};
