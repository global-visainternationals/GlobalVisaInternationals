export default function NotFound() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Coming Soon</h1>
        <p style={styles.text}>This page is under construction. Please check back later!</p>
        <a href="/" style={styles.button}>Go Back Home</a>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      color: "#ffb400",
    },
    text: {
      fontSize: "1.2rem",
      color: "#333",
    },
    button: {
      display: "inline-block",
      marginTop: "20px",
      padding: "10px 15px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      transition: "0.3s",
    },
  };
  