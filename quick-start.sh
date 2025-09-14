#!/bin/bash

# SPEC KIT Quick Start Script
# One-command setup for The Righteous Teachers WordPress SPEC KIT

echo "🚀 The Righteous Teachers SPEC KIT - Quick Start"
echo "================================================"

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "success") echo -e "\033[32m✅ $message\033[0m" ;;
        "warning") echo -e "\033[33m⚠️  $message\033[0m" ;;
        "error") echo -e "\033[31m❌ $message\033[0m" ;;
        "info") echo -e "\033[34mℹ️  $message\033[0m" ;;
    esac
}

# Check if we're in the right directory
if [ ! -f "SPEC_KIT_README.md" ]; then
    print_status "error" "SPEC KIT not found. Please run this script from the SPEC KIT directory."
    exit 1
fi

print_status "info" "Starting SPEC KIT validation and setup..."

# Step 1: Validate the SPEC KIT
print_status "info" "Step 1: Validating SPEC KIT components..."
if ./validate-spec-kit.sh | grep -q "SUCCESS RATE: 100%"; then
    print_status "success" "SPEC KIT validation passed"
else
    print_status "warning" "SPEC KIT validation had issues - continuing anyway"
fi

echo ""

# Step 2: Check for WordPress installation
print_status "info" "Step 2: Checking deployment options..."

if command -v wp &> /dev/null; then
    print_status "success" "WP-CLI detected - WordPress deployment available"
    echo "  → Run './deploy-wordpress.sh' to deploy to WordPress"
else
    print_status "warning" "WP-CLI not found - WordPress deployment requires manual setup"
    echo "  → Follow LAUNCH_GUIDE_README.md for manual WordPress installation"
fi

echo ""

# Step 3: Check for Node.js and preview capabilities
print_status "info" "Step 3: Checking preview application setup..."

if command -v npm &> /dev/null; then
    print_status "success" "Node.js detected - Preview application available"
    
    # Check if dependencies are installed
    if [ -d "node_modules" ]; then
        print_status "success" "Dependencies already installed"
    else
        print_status "info" "Installing dependencies..."
        npm install --silent
        if [ $? -eq 0 ]; then
            print_status "success" "Dependencies installed successfully"
        else
            print_status "warning" "Dependency installation had issues"
        fi
    fi
    
    echo "  → Run 'npm run dev' to start the preview application"
    echo "  → Run 'npm run build' to build for production"
else
    print_status "warning" "Node.js not found - Preview application requires Node.js installation"
fi

echo ""

# Step 4: Display next steps
print_status "info" "🎯 QUICK START SUMMARY"
echo "=========================="
echo ""
echo "📋 Available Actions:"
echo ""
echo "1. 📖 READ DOCUMENTATION:"
echo "   → Open 'SPEC_KIT_README.md' for complete specifications"
echo "   → Open 'LAUNCH_GUIDE_README.md' for WordPress deployment"
echo ""
echo "2. 🌐 DEPLOY WORDPRESS SITE:"
echo "   → Ensure WordPress 6.8.1+ is installed on target server"
echo "   → Run './deploy-wordpress.sh' (requires WP-CLI)"
echo "   → Or follow manual steps in LAUNCH_GUIDE_README.md"
echo ""
echo "3. 🎨 PREVIEW MODERN VERSION:"
echo "   → Run 'npm run dev' to start development server"
echo "   → Visit http://localhost:3000 to see cosmic-themed preview"
echo ""
echo "4. ✅ VALIDATE COMPONENTS:"
echo "   → Run './validate-spec-kit.sh' anytime to check package integrity"
echo ""

# Final status
if command -v wp &> /dev/null && command -v npm &> /dev/null; then
    print_status "success" "SPEC KIT READY - All deployment options available!"
elif command -v npm &> /dev/null; then
    print_status "success" "SPEC KIT READY - Preview application available, WordPress requires manual setup"
else
    print_status "warning" "SPEC KIT READY - Manual setup required for all components"
fi

echo ""
echo "📧 Support: therighteousteachers@gmail.com"
echo "🌟 'The Truth - there is nothing Greater!'"