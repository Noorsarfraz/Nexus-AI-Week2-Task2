const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// Secret key for JWT token
const JWT_SECRET = 'nexus_ai_super_secret_key_123';

// Mock Databases
let users = []; // In-memory user storage
let aiNodes = [
  { id: 1, title: 'GPT-4 Telemetry Node', status: 'Active' },
  { id: 2, title: 'Neural Cluster 01', status: 'Optimizing' }
];

// --- AUTHENTICATION ROUTES ---

// 1. SIGNUP Route
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error during signup' });
  }
});

// 2. LOGIN Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Create JWT Token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error during login' });
  }
});


// --- CRUD ROUTES (AI Nodes) ---

// 1. READ: Saare nodes fetch karne ke liye
app.get('/api/nodes', (req, res) => {
  res.json(aiNodes);
});

// 2. CREATE: Naya AI Node add karne ke liye
app.post('/api/nodes', (req, res) => {
  const newNode = {
    id: Date.now(),
    title: req.body.title,
    status: req.body.status || 'Active'
  };
  aiNodes.push(newNode);
  res.status(201).json(newNode);
});

// 3. UPDATE: Existing Node ko edit karne ke liye
app.put('/api/nodes/:id', (req, res) => {
  const id = Number(req.params.id); // Ensure number conversion
  const { title, status } = req.body;
  
  let found = false;
  aiNodes = aiNodes.map(node => {
    if (node.id === id) {
      found = true;
      return { ...node, title: title || node.title, status: status || node.status };
    }
    return node;
  });

  if (!found) {
    return res.status(404).json({ error: 'AI Node not found' });
  }

  const updatedNode = aiNodes.find(node => node.id === id);
  res.json(updatedNode); // Hamesha valid JSON return hoga
});

// 4. DELETE: Node ko remove karne ke liye
app.delete('/api/nodes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  aiNodes = aiNodes.filter(node => node.id !== id);
  res.json({ message: 'AI Node deleted successfully' });
});

app.listen(5001, () => {
  console.log('Nexus AI Backend running on http://localhost:5001');
});