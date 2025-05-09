import React from 'react';
import './App.css'; // Make sure to include styles or use inline CSS as needed
import shopImage from './assets/20250509_1843_Barcode_Scan_in_Supermarket_simple_compose_01jttjss7feygatzt844bjhecz-removebg-preview.png'; // Replace with your image path

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="ez">EZ</span>
          <span className="shopit">Shopit</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Purchases</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <button className="logout-btn">Log-out</button>
      </header>

      <main className="main-section">
        <div className="text-section">
        <div className="steps">
  <div className="flow-chart">
  <div className="top-row">
    <h2 className="label choose">Choose</h2>
    <h2 className="label pay">Pay</h2>
  </div>

  <div className="connectors">
    <div className="dot-line left-line"></div>
    <div className="dot-line right-line"></div>
  </div>

  <div className="bottom-row">
    <h2 className="scan">Scan</h2>
  </div>
</div>
</div>


          <div className="description">
            <strong>Welcome to a new era of shopping convenience!</strong>
            <p>No more waiting in long queues — simply scan the product barcode using your phone, view details, and pay securely in seconds.</p>
            <p>Fast. Simple. Contactless.</p>
          </div>

          <button className="scan-btn">Scan</button>
        </div>

        <div className="image-section">
          <img src={shopImage} alt="Shopper" />
        </div>
      </main>
    </div>
  );
};

export default App;



// function App() {
//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <div style={styles.logoSection}>
//           <div style={styles.logo}>EZ</div>
//           <h2 style={styles.logoText}>Shopit</h2>
//         </div>
//         <nav style={styles.navMenu}>
//           <a href="#" style={styles.navLink}>Home</a>
//           <a href="#" style={styles.navLink}>Purchases</a>
//           <a href="#" style={styles.navLink}>About Us</a>
//           <a href="#" style={styles.navLink}>Contact</a>
//           <button style={styles.logoutButton}>Log-out</button>
//         </nav>
//       </header>

//       <main style={styles.mainContent}>
//         <div style={styles.textContent}>
//           <div style={styles.flowText}>
//             <h1 style={styles.chooseText}>Choose</h1>
//             <h1 style={styles.scanText}>Scan</h1>
//             <h1 style={styles.payText}>Pay</h1>
//           </div>

//           <div style={styles.description}>
//             <strong style={styles.welcome}>Welcome to a new era of shopping convenience!</strong>
//             <p style={styles.details}>
//               No more waiting in long queues — simply scan the product barcode using your phone,
//               view details, and pay securely in seconds.
//               <br />Fast. Simple. Contactless.
//             </p>
//             <button style={styles.scanButton}>Scan</button>
//           </div>
//         </div>

//         <div style={styles.imageContainer}>
//           <img src={shopImage} alt="Shopper" style={styles.image} />
//         </div>
//       </main>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     backgroundColor: '#000',
//     color: '#fff',
//     minHeight: '100vh',
//     padding: '20px',
//     fontFamily: 'Poppins, sans-serif',
//     borderRadius: '20px',
//     border: '1px solid #aaa'
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: '30px',
//   },
//   logoSection: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: '24px',
//     marginRight: '10px',
//     fontWeight: 'bold'
//   },
//   logoText: {
//     fontSize: '26px',
//     color: '#d2a5f2',
//     textShadow: '0 0 10px #d2a5f2'
//   },
//   navMenu: {
//     display: 'flex',
//     gap: '25px',
//     alignItems: 'center',
//   },
//   navLink: {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '18px',
//   },
//   logoutButton: {
//     backgroundColor: 'transparent',
//     border: '2px solid #d2a5f2',
//     color: 'white',
//     padding: '10px 16px',
//     borderRadius: '10px',
//     fontSize: '18px',
//     boxShadow: '0 0 5px #d2a5f2'
//   },
//   mainContent: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   textContent: {
//     maxWidth: '50%'
//   },
//   flowText: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px'
//   },
//   chooseText: {
//     fontSize: '36px',
//     color: '#d2a5f2'
//   },
//   scanText: {
//     fontSize: '36px',
//     fontWeight: 'bold'
//   },
//   payText: {
//     fontSize: '36px',
//     color: '#d2a5f2'
//   },
//   description: {
//     marginTop: '30px'
//   },
//   welcome: {
//     fontSize: '18px'
//   },
//   details: {
//     fontSize: '16px',
//     marginTop: '10px',
//     lineHeight: '1.5'
//   },
//   scanButton: {
//     backgroundColor: '#d2a5f2',
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: '20px',
//     padding: '10px 24px',
//     marginTop: '20px',
//     border: 'none',
//     borderRadius: '10px',
//     cursor: 'pointer'
//   },
//   imageContainer: {
//     flex: 1,
//     textAlign: 'right'
//   },
//   image: {
//     width: '300px',
//     objectFit: 'contain'
//   }
// };

// export default App;
