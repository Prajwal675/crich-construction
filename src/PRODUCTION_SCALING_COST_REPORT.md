# Production Scaling And Cost Report

Date: 2026-05-16

## Context

The Crich Constructions website is currently a Vite + React static marketing site hosted on Vercel free/Hobby plan, with plans to buy a custom domain and later move to Vercel Pro if organic traffic grows significantly.

This report summarizes the production impact, scaling approach, and approximate monthly cost expectations in INR for a higher-traffic setup using Vercel and selected third-party services.

## Current Hosting Situation

Current setup:

- Static Vite/React site
- Hosted on Vercel free/Hobby plan
- No custom domain yet
- Contact form handled through Formspree environment variable
- Image-heavy marketing site with project, team, material partner, and hero images

Important note:

- For a business/commercial website, Vercel Pro is the cleaner long-term production plan.
- Vercel Hobby is useful for development, testing, and small/non-commercial deployments.
- Once the site represents active business lead generation or receives meaningful traffic, moving to Pro is recommended.

## Effect Of Buying A Domain

Buying a domain does not negatively affect performance.

Benefits:

- Stronger brand trust
- Better SEO identity
- Easier sharing and advertising
- Professional email/domain consistency
- Cleaner analytics and Search Console setup

Recommended domain setup:

- Pick one canonical version:
  - `https://www.example.com`
  - or `https://example.com`
- Redirect the non-canonical version to the canonical one.
- Configure SSL through Vercel.
- Add the domain to Google Search Console.
- Update Open Graph, Twitter, sitemap, and canonical metadata.

Typical domain cost:

```text
₹800 - ₹1,500/year for common .com/.in domains
```

Monthly equivalent:

```text
₹80 - ₹150/month approximately
```

## Recommended Production Architecture

For this site, the best industry-standard production architecture is CDN-first static hosting.

```text
User
  -> Custom Domain
  -> Vercel CDN
  -> Static Vite Build
  -> Optimized Images
  -> Formspree / CRM for lead capture
  -> Analytics + monitoring
```

Why this works well:

- Static sites scale extremely well.
- Vercel serves files from edge locations.
- There is no heavy backend server to load balance.
- Most traffic is handled by CDN caching.
- Form handling is delegated to a managed third-party service.

## Scaling Strategy

### Stage 1 - Current / Early Production

Use:

- Vercel Hobby or Pro depending on commercial requirement
- Custom domain
- Optimized static images
- Formspree free/low-tier
- Google Analytics
- Google Search Console

Approximate monthly cost:

```text
₹0 - ₹2,100/month
```

This assumes Vercel Hobby or only Vercel Pro plus domain.

### Stage 2 - Growing Business Traffic

Use:

- Vercel Pro
- Custom domain
- Formspree paid plan if lead volume increases
- Google Analytics
- Google Search Console
- Sentry free tier
- Pre-optimized static images

Approximate monthly cost:

```text
₹4,000 - ₹5,500/month
```

This is the recommended practical setup once the site becomes an active lead-generation channel.

### Stage 3 - Heavy Traffic / Paid Campaigns / High Lead Volume

Use:

- Vercel Pro
- Formspree paid tier
- Sentry paid monitoring
- Cloudinary/ImageKit or similar image CDN
- Vercel Analytics / Speed Insights
- Google Analytics and Search Console

Approximate monthly cost before tax:

```text
₹16,500 - ₹18,000/month
```

Approximate monthly cost with 18% GST/taxes where applicable:

```text
₹19,500 - ₹21,500/month
```

## Approximate Cost Breakdown

Assumed exchange rate:

```text
1 USD = ₹96 approximately
```

Actual billing will vary based on exchange rate, taxes, provider pricing, usage, and plan changes.

### Baseline Production

| Tool | Plan | Approx USD | Approx INR |
|---|---|---:|---:|
| Vercel | Pro | $20/month | ₹1,920/month |
| Domain | .com/.in | varies | ₹800-₹1,500/year |
| Google Analytics | Free | $0 | ₹0 |
| Google Search Console | Free | $0 | ₹0 |
| Sentry | Free/Developer | $0 | ₹0 |
| Cloudinary/ImageKit | Free tier | $0 | ₹0 |
| Formspree | Free tier | $0 | ₹0 |

Expected cost:

```text
₹2,000/month approximately
```

Plus annual domain renewal.

### Recommended Growing-Business Setup

| Tool | Purpose | Approx INR/month |
|---|---|---:|
| Vercel Pro | Hosting/CDN/builds | ₹1,920 |
| Domain | Brand identity | ₹80-₹150 |
| Formspree paid tier | Lead form submissions | ₹2,000-₹3,000 |
| Google Analytics | Traffic analytics | ₹0 |
| Google Search Console | SEO monitoring | ₹0 |
| Sentry free tier | Frontend error tracking | ₹0 |
| Static optimized images | Performance | ₹0 extra |

Expected cost:

```text
₹4,000 - ₹5,500/month
```

### Heavy Growth Setup

| Tool | Purpose | Approx INR/month |
|---|---|---:|
| Vercel Pro | Hosting/CDN/builds | ₹1,920 |
| Formspree paid tier | Lead form submissions | ₹2,880 |
| Sentry Team | Error monitoring | ₹2,496 |
| Cloudinary Plus or image CDN | Image optimization/CDN | ₹9,504 |
| Domain | Brand identity | ₹80-₹150 |

Expected cost before tax:

```text
₹16,500 - ₹18,000/month
```

Expected cost after estimated tax:

```text
₹19,500 - ₹21,500/month
```

## Vercel Traffic Cost Considerations

Vercel Pro includes substantially higher usage than Hobby and supports pay-as-you-go overages.

The most important cost driver for this site will be image bandwidth.

Example bandwidth estimate:

| Average page weight | Approx visits supported by 1 TB transfer |
|---:|---:|
| 5 MB/visit | ~200,000 visits |
| 3 MB/visit | ~330,000 visits |
| 1.5 MB/visit | ~660,000 visits |
| 1 MB/visit | ~1,000,000 visits |

Conclusion:

- Image optimization directly increases how much traffic the same hosting budget can support.
- Large uncompressed images can make the site expensive and slow.
- Optimizing images is both a performance improvement and a cost-control measure.

Possible extra bandwidth cost example:

```text
Extra 500 GB transfer ≈ $75 ≈ ₹7,200
Extra 1 TB transfer ≈ $150 ≈ ₹14,400
```

These are approximate and should be checked against current Vercel pricing before budgeting.

## Recommended Third-Party Tools

### Hosting

Recommended:

- Vercel Pro

Why:

- Easy deployment from Git
- Strong CDN
- Good static-site performance
- Preview deployments
- Good domain and SSL handling

### Forms / Leads

Recommended:

- Formspree initially
- Later: CRM-backed form handling if lead workflow becomes more complex

Possible future options:

- HubSpot forms
- Zoho CRM
- Custom backend API
- Airtable/Google Sheets integration

### Images

Recommended first step:

- Pre-optimize static images before deployment.

Recommended if traffic grows:

- Cloudinary
- ImageKit
- Cloudflare Images

Do not move to paid image CDN too early unless:

- Image traffic is high.
- You need dynamic transformations.
- Upload workflows become frequent.
- Bandwidth cost becomes a problem.

### Analytics

Recommended:

- Google Analytics
- Google Search Console
- Vercel Analytics
- Vercel Speed Insights

### Error Monitoring

Recommended:

- Sentry free tier initially
- Sentry paid plan only when errors become business-critical or multiple team members need monitoring workflows

## Best Industry-Standard Scaling Method

### Immediate

1. Keep the site static.
2. Use Vercel CDN.
3. Buy and configure a custom domain.
4. Optimize all images.
5. Use Formspree for leads.
6. Add analytics and Search Console.

### When Traffic Grows

1. Move to Vercel Pro.
2. Add budget alerts/spend controls.
3. Monitor bandwidth and page weight.
4. Upgrade Formspree if form submissions increase.
5. Add Sentry if frontend errors need tracking.
6. Add Cloudinary/ImageKit only if image bandwidth or image workflows justify the cost.

### When Traffic Becomes Very High

1. Keep Vercel Pro or evaluate Enterprise only if needed.
2. Use dedicated image CDN.
3. Use stronger caching rules.
4. Use bot protection/WAF through Vercel or Cloudflare if abusive traffic appears.
5. Connect lead forms directly to CRM.
6. Add uptime and synthetic monitoring.

## Cost-Control Recommendations

1. Compress images before launch.
2. Use WebP/AVIF where possible.
3. Lazy-load below-the-fold images.
4. Preload only the hero/banner image.
5. Avoid huge homepage payloads.
6. Remove unused assets.
7. Use Vercel spend limits and usage alerts.
8. Watch bandwidth after campaigns or SEO spikes.
9. Do not upgrade every third-party tool at once.
10. Upgrade only when usage data justifies it.

## Practical Recommendation For Crich Constructions

Recommended near-term setup:

```text
Vercel Pro
+ Custom domain
+ Optimized static images
+ Formspree free or paid depending on lead volume
+ Google Analytics
+ Google Search Console
+ Vercel Analytics / Speed Insights
+ Sentry free tier
```

Expected realistic budget:

```text
₹4,000 - ₹5,500/month
```

Recommended higher-growth budget:

```text
₹20,000/month approximately
```

The site should not need a custom backend or traditional load balancer at this stage. A CDN-first static deployment is the correct industry-standard approach for this type of website.

