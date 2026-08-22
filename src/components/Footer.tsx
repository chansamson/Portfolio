export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-12">
      <p className="text-center text-xs">
        Copyright © {currentYear}. Christian Samson. All rights reserved.
      </p>
      <p className="text-center text-xs mt-1 text-teal-300">
        For those who come after.
      </p>
    </footer>
  );
};
