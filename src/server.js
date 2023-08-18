const express = require('express');
const path = require('path');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const selectRoutes = require('./routes/select');
const syncRoutes = require('./routes/sync');
const livePreviewRoutes = require('./routes/livePreview');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));


// Additional routes
app.use("/upload", uploadRoutes);
app.use("/select", selectRoutes);
app.use("/sync", syncRoutes);
app.use("/live-preview", livePreviewRoutes);

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});