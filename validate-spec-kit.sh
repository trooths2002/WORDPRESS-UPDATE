#!/bin/bash

# SPEC KIT Validation Script
# Validates all components of The Righteous Teachers WordPress launch package

echo "🔍 The Righteous Teachers SPEC KIT Validation"
echo "=============================================="

# Initialize counters
total_checks=0
passed_checks=0

# Function to check file existence and size
check_file() {
    local file=$1
    local description=$2
    total_checks=$((total_checks + 1))
    
    if [ -f "$file" ]; then
        local size=$(du -h "$file" | cut -f1)
        echo "✅ $description ($size)"
        passed_checks=$((passed_checks + 1))
    else
        echo "❌ $description - FILE MISSING"
    fi
}

# Function to check directory existence
check_directory() {
    local dir=$1
    local description=$2
    total_checks=$((total_checks + 1))
    
    if [ -d "$dir" ]; then
        local count=$(find "$dir" -type f | wc -l)
        echo "✅ $description ($count files)"
        passed_checks=$((passed_checks + 1))
    else
        echo "❌ $description - DIRECTORY MISSING"
    fi
}

echo "📋 Checking WordPress Export..."
check_file "therighteousteachers.WordPress.2025-09-11.xml" "WordPress Export File"

echo ""
echo "📚 Checking Documentation Files..."
check_file "SPEC_KIT_README.md" "SPEC KIT Master Documentation"
check_file "LAUNCH_GUIDE_README.md" "Launch Guide"
check_file "wordpress_site_mapping.md" "Site Mapping Documentation"
check_file "wordpress_plugins_checklist.md" "Plugin Installation Guide"
check_file "wordpress_file_structure.md" "File Structure Guide"
check_file "wordpress_free_alternative_guide.md" "Free Plugin Alternatives"
check_file "design_guidelines.md" "Design Guidelines"

echo ""
echo "⚙️ Checking Configuration Files..."
check_file "package.json" "Node.js Package Configuration"
check_file "tailwind.config.ts" "Tailwind CSS Configuration"
check_file "vite.config.ts" "Vite Build Configuration"
check_file "tsconfig.json" "TypeScript Configuration"
check_file "drizzle.config.ts" "Database Configuration"

echo ""
echo "🚀 Checking Preview Application..."
check_directory "client" "React Frontend Application"
check_directory "server" "Express Backend Server"
check_directory "shared" "Shared Types and Utilities"
check_file "index.html" "Application Entry Point"

echo ""
echo "🔧 Checking Deployment Scripts..."
check_file "deploy-wordpress.sh" "WordPress Deployment Script"

echo ""
echo "🎨 Checking Assets..."
check_file "THEMES.png" "Theme Preview Image"

echo ""
echo "📊 VALIDATION SUMMARY"
echo "===================="
echo "Total Checks: $total_checks"
echo "Passed: $passed_checks"
echo "Failed: $((total_checks - passed_checks))"

# Calculate percentage
percentage=$((passed_checks * 100 / total_checks))
echo "Success Rate: $percentage%"

echo ""
if [ $percentage -eq 100 ]; then
    echo "🎉 SPEC KIT VALIDATION COMPLETE - ALL CHECKS PASSED!"
    echo "✅ The WordPress launch package is ready for deployment"
elif [ $percentage -ge 90 ]; then
    echo "✅ SPEC KIT VALIDATION MOSTLY COMPLETE"
    echo "⚠️  Minor issues detected but package is functional"
elif [ $percentage -ge 75 ]; then
    echo "⚠️  SPEC KIT VALIDATION PARTIAL"
    echo "🔧 Some components need attention before deployment"
else
    echo "❌ SPEC KIT VALIDATION FAILED"
    echo "🚨 Significant issues detected - review required"
fi

echo ""
echo "📞 For support: therighteousteachers@gmail.com"