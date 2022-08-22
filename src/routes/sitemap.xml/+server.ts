import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const headers = {
		'Content-Type': 'application/xml'
	};

	const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.orcheweb.com/</loc>
            <lastmod>2022-08-22</lastmod>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://www.orcheweb.com/about/</loc>
            <lastmod>2022-08-22</lastmod>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>https://www.orcheweb.com/stacks/</loc>
            <lastmod>2022-08-22</lastmod>
            <changefreq>monthly</changefreq>
        </url>
    </urlset>`;

	return new Response(body, { headers });
};
