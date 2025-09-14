# WordPress File Structure & Directory Map
## The Righteous Teachers Website

### Root WordPress Installation
```
therighteousteachers.org/
├── wp-admin/                    # WordPress admin files
├── wp-content/
│   ├── themes/
│   │   ├── oceanwp/            # Main theme
│   │   └── oceanwp-child/      # Child theme (recommended)
│   ├── plugins/
│   │   ├── elementor/          # Elementor Pro
│   │   ├── elementor-pro/      # Elementor Pro extensions
│   │   ├── essential-addons-elementor-lite/ # Essential Addons
│   │   ├── download-monitor/   # Download management
│   │   ├── seo-by-rankmath/    # SEO plugin
│   │   ├── mailpoet/          # Newsletter plugin
│   │   ├── forminator/        # Forms plugin
│   │   ├── litespeed-cache/   # Performance cache
│   │   ├── audioigniter/      # Audio player
│   │   ├── swift-performance-lite/ # Performance optimization
│   │   └── wp-smushit/        # Image optimization
│   ├── uploads/
│   │   ├── 2019/06/           # Historical audio files
│   │   │   ├── 1_Sav_Day_1958_6-37_8-34.mp3
│   │   │   ├── 2_Sav_Day_1958_56-27_58-08.mp3
│   │   │   └── [additional audio files]
│   │   ├── 2020/06/           # Image assets from 2020
│   │   │   ├── ancestors1.jpg
│   │   │   └── [additional images]
│   │   ├── 2022/
│   │   │   ├── 04/            # April 2022 images
│   │   │   ├── 05/            # May 2022 images
│   │   │   ├── 06/            # Site logo and brand assets
│   │   │   │   ├── cropped-RT_logo_2w-pen1web-32x32.png
│   │   │   │   └── RT_logo_2w-pen1web.png
│   │   │   └── 07/            # July 2022 images
│   │   ├── 2024/              # Recent content
│   │   └── elementor/         # Elementor assets
│   │       ├── css/           # Generated CSS files
│   │       └── js/            # Generated JS files
│   └── cache/                 # LiteSpeed cache files
├── wp-includes/               # WordPress core files
├── wp-config.php             # Main configuration file
├── .htaccess                 # Server configuration
├── index.php                 # Main WordPress file
└── robots.txt               # SEO robots file
```

### Database Tables Structure
```sql
-- Standard WordPress Tables
wp_posts                    # Posts, pages, attachments
wp_postmeta                # Post metadata
wp_users                   # User accounts
wp_usermeta               # User metadata
wp_comments               # Comments
wp_commentmeta            # Comment metadata
wp_terms                  # Categories, tags
wp_termmeta               # Term metadata
wp_term_taxonomy          # Term relationships
wp_term_relationships     # Post-term relationships
wp_options               # Site settings

-- Plugin-Specific Tables
wp_elementor_*            # Elementor data tables
wp_rank_math_*           # Rank Math SEO tables
wp_mailpoet_*            # MailPoet email tables
wp_forminator_*          # Forminator forms tables
wp_download_*            # Download Monitor tables
```

### Theme File Structure (OceanWP)
```
wp-content/themes/oceanwp/
├── style.css              # Main theme stylesheet
├── functions.php          # Theme functions
├── index.php             # Main template
├── header.php            # Header template
├── footer.php            # Footer template
├── sidebar.php           # Sidebar template
├── single.php            # Single post template
├── page.php              # Page template
├── archive.php           # Archive template
├── search.php            # Search results template
├── 404.php               # Error page template
├── assets/
│   ├── css/              # Theme CSS files
│   ├── js/               # Theme JavaScript files
│   └── images/           # Theme images
└── inc/                  # Theme includes
    ├── customizer/       # Customizer options
    ├── widgets/          # Custom widgets
    └── helpers.php       # Helper functions
```

### Essential Configuration Files

#### wp-config.php Configuration
```php
<?php
// Database settings
define('DB_NAME', 'therighteousteachers_db');
define('DB_USER', 'database_user');
define('DB_PASSWORD', 'database_password');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// Security keys (generate new ones)
define('AUTH_KEY', '[GENERATE_UNIQUE_KEY]');
define('SECURE_AUTH_KEY', '[GENERATE_UNIQUE_KEY]');
// ... [additional security keys]

// WordPress settings
$table_prefix = 'wp_';
define('WP_DEBUG', false);
define('WP_CACHE', true); // For LiteSpeed Cache

// File permissions
define('FS_METHOD', 'direct');
define('FS_CHMOD_DIR', (0755 & ~ umask()));
define('FS_CHMOD_FILE', (0644 & ~ umask()));

// Memory limits
ini_set('memory_limit', '512M');
define('WP_MEMORY_LIMIT', '512M');
define('WP_MAX_MEMORY_LIMIT', '512M');
```

#### .htaccess Configuration
```apache
# WordPress standard rules
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# LiteSpeed Cache rules
<IfModule LiteSpeed>
RewriteEngine on
CacheLookup on
</IfModule>

# Security headers
<IfModule mod_headers.c>
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# File compression
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

### Plugin Data Locations

#### Elementor Data Storage
- **Location**: `wp_postmeta` table
- **Meta Key**: `_elementor_data`
- **Purpose**: Stores page builder layouts and configurations

#### Download Monitor Files
- **Location**: `wp-content/uploads/dlm_files/`
- **Categories**: 
  - Newsletter downloads
  - Member-exclusive content
  - Premium papers

#### Audio Files Organization
```
wp-content/uploads/
├── 2019/06/                 # Historical recordings
│   ├── 1_Sav_Day_1958_6-37_8-34.mp3
│   ├── 2_Sav_Day_1958_56-27_58-08.mp3
│   └── [additional Savior's Day recordings]
├── audio_archives/          # Organized audio content
└── member_content/          # Restricted access audio
```

### Image Size Configurations
```php
// OceanWP custom image sizes
add_image_size('ocean-thumb-m', 600, 555, true);    # Medium thumbnail
add_image_size('ocean-thumb-ml', 450, 450, false);  # Medium-large
add_image_size('ocean-thumb-l', 700, 700, false);   # Large thumbnail
add_image_size('audioigniter_cover', 300, 300, true); # Audio covers
```

### Backup Structure
```
backups/
├── database/
│   ├── full_backup_YYYY-MM-DD.sql
│   └── incremental_backup_YYYY-MM-DD.sql
├── files/
│   ├── wp-content_YYYY-MM-DD.tar.gz
│   └── uploads_YYYY-MM-DD.tar.gz
└── configs/
    ├── wp-config.php.backup
    └── .htaccess.backup
```

### Development vs Production Differences

#### Development Environment
- `WP_DEBUG = true`
- `WP_DEBUG_LOG = true`
- Smaller image sizes for faster loading
- Test payment gateways
- Staging domain (staging.therighteousteachers.org)

#### Production Environment
- `WP_DEBUG = false`
- Full image optimization enabled
- Live payment processing
- SSL certificate required
- CDN integration (optional)
- Regular automated backups

### File Permissions (Linux/Unix)
```bash
# WordPress core files
find /path/to/wordpress/ -type f -exec chmod 644 {} +
find /path/to/wordpress/ -type d -exec chmod 755 {} +

# wp-config.php (more restrictive)
chmod 600 wp-config.php

# .htaccess
chmod 644 .htaccess

# Uploads directory (writable)
chmod 755 wp-content/uploads
find wp-content/uploads -type f -exec chmod 644 {} +
find wp-content/uploads -type d -exec chmod 755 {} +
```

### Server Requirements
- **PHP**: 8.0+ (WordPress 6.8.1 requirement)
- **MySQL**: 5.7+ or MariaDB 10.3+
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **Memory**: 512MB minimum (1GB recommended)
- **Storage**: 10GB+ for media files
- **SSL**: Required for production

### Critical Files Checklist
- [ ] `wp-config.php` - Database and security configuration
- [ ] `.htaccess` - URL rewriting and security rules
- [ ] `robots.txt` - SEO crawler instructions
- [ ] Site logo files in `/uploads/2022/06/`
- [ ] All historical audio files in `/uploads/2019/06/`
- [ ] Theme files in `/themes/oceanwp/`
- [ ] All required plugins in `/plugins/` directory
- [ ] Database backup with complete content structure
- [ ] Elementor templates and page layouts

---
*This file structure provides the complete WordPress installation map needed for accurate site recreation and maintenance.*