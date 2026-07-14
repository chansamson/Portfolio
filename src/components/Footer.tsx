export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-12">
      <p className="text-center text-xs">
        Copyright © {currentYear}. Christian Samson. All rights reserved.
      </p>
    </footer>
  );
};
