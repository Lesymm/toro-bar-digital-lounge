# Netlify Forms Email Setup

After deploying to Netlify, you need to configure email notifications for the contact form:

## Step-by-Step Instructions

1. **Go to Netlify Dashboard** → **Forms** → **contact** → **Notifications**

2. **Add Email Notification #1:**
   - Click **"Email notification"**
   - **Recipient:** `torobardc@gmail.com`
   - Save the notification

3. **Add Email Notification #2:**
   - Click **"Email notification"** again
   - **Recipient:** `waseem@tranquilmedia.com` 
   - Save the notification

## Important Notes

- Both email addresses will receive all form submissions
- No third-party services (like EmailJS) are needed
- Netlify handles all form processing automatically
- Form submissions will appear in Netlify Dashboard → Forms

## Form Details

- **Form Name:** contact
- **Method:** POST
- **Fields:** name, email, phone, message
- **Spam Protection:** Built-in honeypot field included