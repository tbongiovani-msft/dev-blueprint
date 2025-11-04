// Validation script for Node.js 18.17.0 compatibility
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating Node.js 18.17.0 compatibility...');
console.log(`📝 Current Node.js version: ${process.version}`);
console.log(`📝 Required version: >=18.17.0`);

// Check if current version meets requirements
const currentVersion = process.version.slice(1); // Remove 'v' prefix
const [major, minor, patch] = currentVersion.split('.').map(Number);
const [reqMajor, reqMinor, reqPatch] = [18, 17, 0];

const isCompatible = (major > reqMajor) || 
    (major === reqMajor && minor > reqMinor) || 
    (major === reqMajor && minor === reqMinor && patch >= reqPatch);

console.log(`✅ Version compatibility: ${isCompatible ? 'PASS' : 'FAIL'}`);

// Check if build artifacts exist
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.js');
const knowledgeBasePath = path.join(distPath, 'knowledge_base');

console.log(`📁 Build artifacts check:`);
console.log(`   - dist/index.js: ${fs.existsSync(indexPath) ? 'EXISTS' : 'MISSING'}`);
console.log(`   - dist/knowledge_base: ${fs.existsSync(knowledgeBasePath) ? 'EXISTS' : 'MISSING'}`);

// Check package.json engines
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`🔧 Engine requirements: ${pkg.engines?.node || 'not specified'}`);
}

console.log('✅ Validation complete!');