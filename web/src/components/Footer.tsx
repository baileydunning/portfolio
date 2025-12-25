export function Footer() {
  return (
    <footer className="py-10">
      <div className="container-main">
        <p className="text-small text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
