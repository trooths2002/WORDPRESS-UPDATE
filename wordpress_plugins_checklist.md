# WordPress Plugins Installation Checklist
## The Righteous Teachers Website Recreation

### REQUIRED PLUGINS (Install in this order)

#### 1. **Elementor (Free)**
- **Download**: https://wordpress.org/plugins/elementor/
- **Version**: Latest
- **License**: Free version
- **Features Used**: Basic page layouts, sections, widgets
- **Priority**: CRITICAL - Core page builder

#### 2. **Essential Addons for Elementor**
- **Download**: https://wordpress.org/plugins/essential-addons-for-elementor-lite/
- **Pro Version**: https://essential-addons.com/elementor/
- **Features**: Extended Elementor widgets and functionality
- **Priority**: HIGH - Enhances Elementor capabilities

#### 3. **OceanWP Theme (Free)**
- **Download**: https://wordpress.org/themes/oceanwp/
- **License**: Free version
- **Features**: Basic theme functionality, custom sidebars
- **Alternative Sidebar Management**: Use WordPress native widget areas
- **Priority**: CRITICAL - Main theme

#### 4. **Download Monitor**
- **Download**: https://downloadmonitor.com/
- **Features**: Member-only downloads, premium content access
- **Configuration**: Categories for Newsletter, Members, Subscribers
- **Priority**: HIGH - Content access control

#### 5. **Rank Math SEO**
- **Download**: https://wordpress.org/plugins/seo-by-rankmath/
- **Pro Features**: https://rankmath.com/pricing/
- **Configuration**: Focus keywords, SEO scoring, sitemap management
- **Priority**: HIGH - SEO optimization

#### 6. **MailPoet**
- **Download**: https://wordpress.org/plugins/mailpoet/
- **Features**: Newsletter management, email tracking
- **Integration**: Subscriber management, automated emails
- **Priority**: MEDIUM - Email marketing

#### 7. **Forminator**
- **Download**: https://wordpress.org/plugins/forminator/
- **Pro**: https://wpmudev.org/project/forminator/
- **Features**: Contact forms, polls, quizzes
- **Priority**: MEDIUM - User interaction

#### 8. **LiteSpeed Cache**
- **Download**: https://wordpress.org/plugins/litespeed-cache/
- **Features**: Performance optimization, QUIC.cloud integration
- **Configuration**: Enable caching, image optimization
- **Priority**: HIGH - Performance

#### 9. **AudioIgniter**
- **Download**: https://wordpress.org/plugins/audioigniter/
- **Features**: Audio player for historical recordings
- **Configuration**: Custom cover sizes, playlist management
- **Priority**: HIGH - Audio content display

#### 10. **Swift Performance**
- **Download**: https://wordpress.org/plugins/swift-performance-lite/
- **Pro**: https://swiftperformance.io/
- **Features**: Lazy loading, performance optimization
- **Priority**: MEDIUM - Additional performance

### ADDITIONAL OPTIMIZATION PLUGINS

#### 11. **WP Smush** (Image Optimization)
- **Download**: https://wordpress.org/plugins/wp-smushit/
- **Evidence**: Found smush optimization data in XML
- **Features**: Image compression, optimization
- **Priority**: MEDIUM - Image optimization

#### 12. **WordPress Importer**
- **Download**: https://wordpress.org/plugins/wordpress-importer/
- **Purpose**: Import XML content
- **Priority**: CRITICAL - Content migration

### PLUGIN CONFIGURATION CHECKLIST

#### Elementor Free Setup
- [ ] Plugin activated and updated
- [ ] Basic templates configured
- [ ] Custom fonts configured (Cinzel, Playfair Display)
- [ ] Color scheme set (cosmic theme)
- [ ] Basic responsive settings configured

#### OceanWP Theme Setup (Free Version)
- [ ] WordPress native sidebars configured:
  - Primary sidebar (main widget area)
  - Footer widget areas
  - Custom widget areas for ads (via Appearance > Widgets)
- [ ] Basic header settings configured
- [ ] Custom image sizes configured (via functions.php):
  - `ocean-thumb-m` (600x555px)
  - `ocean-thumb-ml` (450px height)  
  - `ocean-thumb-l` (700px height)

#### Download Monitor Configuration
- [ ] Download categories created:
  - Newsletter
  - Registered Members
  - Subscriber (child of Registered Members)
- [ ] Premium tag configured
- [ ] Member access controls enabled
- [ ] Download tracking enabled

#### Rank Math SEO Configuration
- [ ] Focus keywords configured
- [ ] SEO scoring enabled
- [ ] XML sitemap generated
- [ ] Audio files excluded from sitemap
- [ ] Meta descriptions set up

#### LiteSpeed Cache Configuration
- [ ] Basic caching enabled
- [ ] Image optimization enabled
- [ ] QUIC.cloud integration (optional)
- [ ] CSS/JS minification enabled

#### MailPoet Configuration
- [ ] Newsletter forms created
- [ ] Email templates designed
- [ ] Subscriber lists configured
- [ ] GDPR compliance enabled

### CONTENT IMPORT PROCESS

#### Step 1: Prepare WordPress
1. Install WordPress 6.8.1+
2. Install and activate all required plugins
3. Configure basic WordPress settings
4. Set permalinks to "Post name"

#### Step 2: Import Content
1. Tools → Import → WordPress
2. Upload provided XML file
3. Map authors:
   - `1dhoruba` → Admin user
   - `minishmael` → Author user
4. Import all content and media
5. Run import process

#### Step 3: Media Configuration
1. Upload all media files to correct directories
2. Verify audio files work (MP3 format)
3. Check image sizes and optimization
4. Test lazy loading functionality

#### Step 4: Navigation Setup
1. Create navigation menus:
   - Main menu (Header)
   - Footer menu
2. Configure menu items:
   - Home
   - Messages in Black
   - Specials
   - Audio Archives
   - About
   - Contact

#### Step 5: Verification Testing
- [ ] Homepage displays correctly
- [ ] All navigation links work
- [ ] Audio files play properly
- [ ] Download access controls function
- [ ] Contact forms work
- [ ] Newsletter signup functions
- [ ] SEO meta tags display
- [ ] Performance optimization active
- [ ] Mobile responsiveness verified

### TROUBLESHOOTING COMMON ISSUES

#### Elementor Issues
- **Problem**: Templates not loading
- **Solution**: Ensure Elementor Pro license is active and templates are imported

#### OceanWP Issues
- **Problem**: Sidebars not displaying
- **Solution**: Check sidebar widget assignments and theme customizer settings

#### Download Monitor Issues
- **Problem**: Downloads not working for members
- **Solution**: Verify user roles and download category permissions

#### Performance Issues
- **Problem**: Slow loading times
- **Solution**: Enable LiteSpeed Cache, optimize images with WP Smush

### FINAL LAUNCH CHECKLIST
- [ ] SSL certificate installed and active
- [ ] DNS pointing to correct server
- [ ] All plugins updated to latest versions
- [ ] Admin user passwords changed
- [ ] Regular backup schedule established
- [ ] Performance monitoring enabled
- [ ] Security monitoring active

### MAINTENANCE SCHEDULE
- **Weekly**: Check for plugin updates
- **Monthly**: Full site backup
- **Quarterly**: Performance review and optimization
- **Annually**: Theme and major plugin updates

---
*This checklist ensures all components from the original WordPress site are properly configured for the staging environment.*