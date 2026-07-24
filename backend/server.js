const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// AI Nodes Data (Yeh hamara mock database hai)
let aiNodes = [
  { id: 1, title: 'GPT-4 Telemetry Node', status: 'Active' },
  { id: 2, title: 'Neural Cluster 01', status: 'Optimizing' }
];

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

/// 3. UPDATE: Existing Node ko edit karne ke liye
app.put('/api/nodes/:id', (req, res) => {
  const id = Number(req.params.id); // Ensure number conversion
  const { title, status } = data = req.body;
  
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