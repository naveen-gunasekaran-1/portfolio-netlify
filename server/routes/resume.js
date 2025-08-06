const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// GET /api/resume/download - Download resume
router.get('/download', (req, res) => {
  try {
    const resumePath = path.join(__dirname, '../public/resume.pdf');
    
    // Check if resume file exists
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({
        success: false,
        message: 'Resume file not found'
      });
    }
    
    // Get file stats
    const stats = fs.statSync(resumePath);
    
    // Set headers for download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="John_Doe_Resume.pdf"');
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    // Log download
    const userAgent = req.get('User-Agent') || 'unknown';
    const ipAddress = req.ip || req.connection.remoteAddress || 'unknown';
    console.log(`Resume downloaded - IP: ${ipAddress}, User-Agent: ${userAgent}`);
    
    // Stream the file
    const fileStream = fs.createReadStream(resumePath);
    fileStream.pipe(res);
    
    fileStream.on('error', (error) => {
      console.error('Resume download error:', error);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          message: 'Error downloading resume'
        });
      }
    });
    
  } catch (error) {
    console.error('Resume download error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to download resume'
    });
  }
});

// GET /api/resume/info - Get resume information
router.get('/info', (req, res) => {
  try {
    const resumePath = path.join(__dirname, '../public/resume.pdf');
    
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({
        success: false,
        message: 'Resume file not found'
      });
    }
    
    const stats = fs.statSync(resumePath);
    
    res.json({
      success: true,
      data: {
        filename: 'John_Doe_Resume.pdf',
        size: stats.size,
        lastModified: stats.mtime,
        downloadUrl: '/api/resume/download'
      }
    });
    
  } catch (error) {
    console.error('Resume info error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get resume information'
    });
  }
});

module.exports = router;