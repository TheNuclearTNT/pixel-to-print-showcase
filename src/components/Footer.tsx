export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} 3D Portfolio. Built with passion and precision.
        </p>
      </div>
    </footer>
  );
};
