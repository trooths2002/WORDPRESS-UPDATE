#!/bin/bash

# The Righteous Teachers WordPress SPEC KIT - Deployment Script
# This script automates the WordPress setup process

echo "🚀 The Righteous Teachers WordPress SPEC KIT Deployment"
echo "=================================================="

# Check prerequisites
check_prerequisites() {
    echo "📋 Checking prerequisites..."
    
    # Check if WordPress is installed
    if [ ! -f "wp-config.php" ]; then
        echo "❌ WordPress not found. Please install WordPress 6.8.1 first."
        exit 1
    fi
    
    # Check if XML export exists
    if [ ! -f "therighteousteachers.WordPress.2025-09-11.xml" ]; then
        echo "❌ WordPress export file not found."
        exit 1
    fi
    
    echo "✅ Prerequisites check passed"
}

# Install required plugins
install_plugins() {
    echo "🔌 Installing required plugins..."
    
    # Core plugins for free setup
    local plugins=(
        "oceanwp"
        "elementor" 
        "essential-addons-for-elementor-lite"
        "seo-by-rank-math"
        "litespeed-cache"
        "download-monitor"
        "mailpoet"
        "forminator"
        "audioigniter"
    )
    
    for plugin in "${plugins[@]}"; do
        echo "Installing $plugin..."
        wp plugin install "$plugin" --activate
    done
    
    echo "✅ Plugins installed successfully"
}

# Configure WordPress settings
configure_wordpress() {
    echo "⚙️ Configuring WordPress settings..."
    
    # Set site information
    wp option update blogname "The Righteous Teachers"
    wp option update blogdescription "The rewards of research is to find the facts that verify the truth. The Truth - there is nothing Greater!"
    wp option update admin_email "therighteousteachers@gmail.com"
    
    # Set permalink structure
    wp rewrite structure '/%postname%/'
    wp rewrite flush
    
    echo "✅ WordPress configuration complete"
}

# Import content
import_content() {
    echo "📥 Importing WordPress content..."
    
    # Install WordPress importer
    wp plugin install wordpress-importer --activate
    
    # Import content from XML
    wp import therighteousteachers.WordPress.2025-09-11.xml --authors=create
    
    echo "✅ Content import complete"
}

# Configure theme
configure_theme() {
    echo "🎨 Configuring OceanWP theme..."
    
    # Activate OceanWP theme
    wp theme activate oceanwp
    
    # Configure sidebars for ads
    wp widget add text home-sidebar1 --title="Google Ads 1"
    wp widget add text home-sidebar2 --title="Google Ads 2"
    wp widget add text blog-QofM1 --title="Blog Ad 1"
    wp widget add text blog-QofM2 --title="Blog Ad 2"
    wp widget add text blog-QoM3 --title="Blog Ad 3"
    wp widget add text rep-sidebar2 --title="Reparations Page Ads"
    
    echo "✅ Theme configuration complete"
}

# Final optimization
final_optimization() {
    echo "🔧 Running final optimizations..."
    
    # Clear all caches
    wp cache flush
    
    # Update database
    wp core update-db
    
    # Generate thumbnails
    wp media regenerate --yes
    
    echo "✅ Optimization complete"
}

# Main deployment process
main() {
    echo "Starting deployment process..."
    
    check_prerequisites
    install_plugins
    configure_wordpress
    import_content
    configure_theme
    final_optimization
    
    echo ""
    echo "🎉 DEPLOYMENT COMPLETE!"
    echo "==============================="
    echo "✅ The Righteous Teachers website has been successfully deployed"
    echo "🌐 Please visit your site to verify everything is working"
    echo "📧 Contact: therighteousteachers@gmail.com for support"
    echo ""
    echo "⚠️  Remember to:"
    echo "   - Test audio file playback"
    echo "   - Verify download permissions"
    echo "   - Check contact forms"
    echo "   - Configure SSL certificate"
    echo "   - Set up backups"
}

# Run the deployment
main "$@"