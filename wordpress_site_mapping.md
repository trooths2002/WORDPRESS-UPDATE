# The Righteous Teachers WordPress Site Mapping & Configuration Guide

## Site Overview
- **Domain**: https://therighteousteachers.org
- **WordPress Version**: 6.8.1
- **Created**: September 11, 2025
- **Language**: English (en-US)
- **Tagline**: "The rewards of research is to find the facts that verify the truth. The Truth - there is nothing Greater!"

## Core WordPress Configuration

### Site Identity
- **Site Title**: The Righteous Teachers
- **Site URL**: https://therighteousteachers.org
- **Admin Email**: therighteousteachers@gmail.com
- **Favicon**: RT_logo_2w-pen1web-32x32.png (32x32px)

### User Accounts
1. **Primary Admin**: 
   - Username: `1dhoruba`
   - Email: therighteousteachers@gmail.com
   - Display Name: The Righteous Teachers
   
2. **Secondary Author**: 
   - Username: `minishmael`
   - Email: ishmaelalislam@yahoo.com
   - Display Name: minishmael
   - First Name: Ishmael
   - Last Name: Al-Islam

## Theme Configuration

### Active Theme: OceanWP
- **Theme**: OceanWP (Free WordPress theme)
- **Download**: https://wordpress.org/themes/oceanwp/
- **License**: Free version with core features

### OceanWP Sidebars Configuration
1. **Home Page Sidebars**:
   - `home-sidebar1`: Google Ads placement #1
   - `home-sidebar2`: Google Ads placement #2

2. **Blog Page Sidebars**:
   - `blog-QofM1`: Single Google Ad on blog page
   - `blog-QofM2`: Second ad on blog page
   - `blog-QoM3`: Third Google Ad holder

3. **Special Page Sidebars**:
   - `rep-sidebar2`: Holds 2 Google Ads on reparations page

### Theme Features
- Transparent header support (meta key: `theme-transparent-header-meta`)
- Custom sidebar management
- SEO optimization integration
- Mobile responsive design

## Required Plugins

### 1. Elementor Page Builder (REQUIRED)
- **Plugin**: Elementor (Free)
- **Purpose**: Main page builder for custom layouts
- **Download**: https://wordpress.org/plugins/elementor/
- **License**: Free version with core features
- **Configuration**: 
  - Basic page builder functionality
  - Custom layouts and sections

### 2. Essential Addons for Elementor (REQUIRED)
- **Plugin**: Essential Addons for Elementor
- **Purpose**: Extended Elementor functionality
- **Download**: https://essential-addons.com/elementor/
- **Meta Keys**: `eael_transient_elements`, `eael_uid`

### 3. Download Monitor (REQUIRED)
- **Plugin**: Download Monitor
- **Purpose**: Manage premium content and member downloads
- **Download**: https://downloadmonitor.com/
- **Categories**:
  - Newsletter subscribers
  - Registered Members
  - Subscriber level
- **Tags**: Premium content tagging

### 4. Rank Math SEO (REQUIRED)
- **Plugin**: Rank Math SEO
- **Purpose**: SEO optimization
- **Download**: https://rankmath.com/
- **Features**:
  - SEO scoring system
  - Focus keyword optimization
  - Sitemap exclusion controls

### 5. MailPoet (Email Marketing)
- **Plugin**: MailPoet
- **Purpose**: Newsletter management
- **Download**: https://mailpoet.com/
- **Integration**: Tracks opens/clicks, IP logging

### 6. Forminator (Forms)
- **Plugin**: Forminator
- **Purpose**: Forms, polls, and quizzes
- **Download**: https://wpmudev.org/project/forminator/
- **Features**: Contact forms, surveys, quiz functionality

### 7. LiteSpeed Cache (Performance)
- **Plugin**: LiteSpeed Cache
- **Purpose**: Website performance optimization
- **Download**: https://wordpress.org/plugins/litespeed-cache/
- **Integration**: QUIC.cloud services

### 8. AudioIgniter (Audio Player)
- **Plugin**: AudioIgniter
- **Purpose**: Audio file management and playback
- **Download**: https://audiotheme.com/view/audioigniter/
- **Cover Size**: Custom audio cover thumbnails

### 9. Swift Performance (Optimization)
- **Plugin**: Swift Performance
- **Purpose**: Lazy loading and performance optimization
- **Features**: Image lazy loading, performance caching

## Content Structure

### Categories
1. **General** (ID: 49)
   - Slug: `general`
   - Description: "Information useful to all people."

2. **Messages in Black** (ID: 73)
   - Slug: `messages-in-black`
   - Description: "Articles which provides information to and for Afrodescendants, generally."

3. **Specials** (ID: 74)
   - Slug: `specials`
   - Description: "For papers by different authors"
   
4. **Author** (ID: 76)
   - Parent: Specials
   - Slug: `author`
   - Description: "Articles done by Authors who will be credited."

### Tags
- `afrodescendant-professionals`
- `afrodescendants`
- `black-business-enterprises`
- `government`
- `human-beings`
- `independence`
- `justice`
- `love-self`
- `support-our-own`
- `truth`

### Navigation Menus
- `custom-menu-1` (ID: 27)
- `custom-menu-2` (ID: 77)

## Media & Content Management

### Audio Archive Structure
- **Historical Recordings**: Savior's Day 1958 series
- **Format**: MP3, Mono, 44.1kHz, VBR encoding
- **Artist**: The Honorable Elijah Muhammad
- **Album**: Savior's Day 1958
- **Storage**: `/wp-content/uploads/YYYY/MM/` structure

### Image Management
- **Thumbnail sizes**: 100x100px
- **Medium large**: 768px width
- **Large sizes**: 1536x1536, 2048x2048
- **Lazy loading**: 20x20px placeholder images
- **Audio covers**: Custom sizing via AudioIgniter

### Member Access Control
- **Download Categories**:
  - Newsletter subscribers
  - Registered Members (parent category)
  - Subscriber level (child of Registered Members)
- **Premium Content**: Tagged with `premium` tag
- **Access Control**: Member registration required for premium papers

## SEO Configuration

### Rank Math Settings
- **Focus Keywords**: Configured per content
- **SEO Scores**: Tracked (example: 96 score for premium tag)
- **Sitemap Exclusions**: Audio files excluded from sitemap
- **Meta Descriptions**: Custom per page/post

## Advertising Integration

### Google Ads Placement
- **Homepage**: 2 sidebar ad positions
- **Blog Pages**: 3 ad positions (QofM series)
- **Reparations Page**: 2 ad positions
- **Integration**: Custom OceanWP sidebars for ad management

## Technical Requirements

### Server Requirements
- **PHP**: 8.0+ (WordPress 6.8.1 requirement)
- **MySQL**: 5.7+ or MariaDB 10.3+
- **Web Server**: Apache or Nginx
- **SSL**: Required (HTTPS)
- **Memory**: 512MB minimum (1GB recommended for Elementor)

### Essential Files for Migration
1. **WordPress Export**: Use provided XML file
2. **Media Files**: All `/wp-content/uploads/` content
3. **Theme Files**: OceanWP theme + child theme
4. **Plugin Files**: All required plugins listed above
5. **Database**: Full WordPress database backup

## Staging Site Setup Instructions

### Step 1: WordPress Installation
1. Install WordPress 6.8.1
2. Configure basic settings (site title, URL, admin user)
3. Set permalink structure to `/%postname%/`

### Step 2: Theme Installation
1. Download and install OceanWP theme
2. Purchase and activate OceanWP Pro extensions
3. Configure theme settings for transparent header
4. Set up custom sidebars as listed above

### Step 3: Plugin Installation & Activation
Install plugins in this order:
1. Elementor Pro (license required)
2. Essential Addons for Elementor
3. Download Monitor
4. Rank Math SEO
5. MailPoet
6. Forminator
7. LiteSpeed Cache
8. AudioIgniter
9. Swift Performance

### Step 4: Content Import
1. Go to Tools → Import in WordPress admin
2. Install WordPress Importer
3. Upload the XML file provided
4. Map authors to existing users
5. Import all content, media, and settings

### Step 5: Media & File Upload
1. Upload all media files to `/wp-content/uploads/`
2. Verify audio files are properly linked
3. Test image display and lazy loading
4. Confirm download links work for registered content

### Step 6: Configuration Verification
1. **Navigation**: Set up main navigation menus
2. **Sidebars**: Configure Google Ads placements
3. **SEO**: Verify Rank Math settings
4. **Forms**: Test contact forms and registration
5. **Email**: Configure MailPoet for newsletters
6. **Performance**: Enable LiteSpeed Cache
7. **Elementor**: Verify all page layouts work
8. **Downloads**: Test member access controls

### Step 7: Testing Checklist
- [ ] Homepage loads with proper layout
- [ ] All navigation menus work
- [ ] Audio files play correctly
- [ ] Image lazy loading functions
- [ ] Contact forms submit properly
- [ ] Member registration/login works
- [ ] Download access controls function
- [ ] SEO meta tags display correctly
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active
- [ ] Performance optimization active

## Custom Development Notes

### Current HTML/React Version
The existing modern version includes:
- Cosmic theme with galaxy backgrounds
- Golden typography (Cinzel font for headers)
- Responsive navigation with mobile menu
- Hero section with portrait integration
- Content sections for each category
- Footer with newsletter signup
- Modern card-based layout
- Hover animations and visual effects

### Integration Recommendations
1. **WordPress Theme**: Create custom OceanWP child theme matching cosmic design
2. **Elementor Templates**: Build Elementor page templates using cosmic color scheme
3. **Content Migration**: Map HTML sections to WordPress pages/posts
4. **Media Integration**: Use existing galaxy images as background elements
5. **SEO Transfer**: Maintain existing meta descriptions and titles
6. **Performance**: Ensure modern animations work with LiteSpeed Cache

## Backup & Maintenance

### Regular Backups Required
- **Database**: Weekly full backup
- **Files**: Weekly backup of wp-content directory
- **Configuration**: Export WordPress settings monthly
- **Security**: Monitor for plugin updates

### Update Schedule
- **WordPress Core**: Update within 30 days of release
- **Plugins**: Update monthly or when security patches released
- **Theme**: Update quarterly or when major features added
- **Content**: Continuous as needed

---

**Note**: This mapping provides all necessary information to recreate the WordPress site. The provided XML file contains the complete content structure, and this configuration guide covers all technical requirements for successful staging site deployment.