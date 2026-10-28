# Bastiram Ji Mithai Wale

A custom Linktree-style opening screen and sweets catalogue, built with Next.js, TypeScript, React and Tailwind CSS. The first screen follows the supplied cream, gold and maroon reference, including its original BMW mark and six action cards. The sweets catalogue and enquiry experience continue below the opening screen.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## Included

- Reference-style opening screen with sweet, store, WhatsApp, call and Instagram links.
- Searchable sweets catalogue, categories, product details and package-size choices.
- Enquiry cart and wedding, bulk and corporate enquiry form.
- Bijainagar and Gulabpura store cards and directions.

No product prices are listed. WhatsApp order and enquiry links route to **+91 94136 75495**. The Instagram link currently points to Instagram’s home page; replace it with the store’s profile URL when available.

## Editing

Product and category data are in `app/page.tsx` in the `products` and `categories` arrays. The WhatsApp destination is the `whatsapp` constant; store names, addresses and map links are in `locations`. The supplied and generated images live in `public/images/`.
