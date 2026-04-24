#!/usr/bin/env node

/**
 * Converts Flickr embed HTML into a photo.js imageData object.
 *
 * Paste embed code into EMBED_CODE below, then run:
 *   node assets/old/flickr2js.js
 *
 * Usage examples:
 *   node assets/old/flickr2js.js "<a data-flickr-embed=...>..."
 *   pbpaste | node assets/old/flickr2js.js
 */

const EMBED_CODE = `
<a data-flickr-embed="true" href="https://www.flickr.com/photos/ccasil/55228591810/in/dateposted-ff" title="Boracay"><img src="https://live.staticflickr.com/65535/55228591810_3dbcd19e66_w.jpg" width="400" height="267" alt="Boracay"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
`;

function usage() {
	console.error('Paste your embed code into EMBED_CODE in this file, then run:');
	console.error('   node assets/old/flickr2js.js');
	console.error('');
	console.error('Usage: node assets/old/flickr2js.js "<flickr embed html>"');
	console.error('   or: pbpaste | node assets/old/flickr2js.js');
}

function extractAttr(tag, attrName) {
	const re = new RegExp(`${attrName}="([^"]+)"`, 'i');
	const match = tag.match(re);
	return match ? match[1] : '';
}

function toHdUrl(srcUrl) {
	// Flickr image URLs often end with _<size>.jpg; use _b for larger display.
	return srcUrl.replace(/_([a-z])\.(jpg|jpeg|png|webp)$/i, '_b.$2');
}

function parseEmbedCode(embedHtml) {
	const imgMatch = embedHtml.match(/<img\b[^>]*>/i);
	if (!imgMatch) {
		throw new Error('No <img> tag found in embed code.');
	}

	const imgTag = imgMatch[0];
	const smallUrl = extractAttr(imgTag, 'src');
	const alt = extractAttr(imgTag, 'alt') || 'alt';
	const width = Number.parseInt(extractAttr(imgTag, 'width'), 10);
	const height = Number.parseInt(extractAttr(imgTag, 'height'), 10);

	if (!smallUrl) {
		throw new Error('No img src found in embed code.');
	}

	const now = new Date();
	const date = `${now.getMonth() + 1}/${now.getFullYear()}`;

	return {
		hdUrl: toHdUrl(smallUrl),
		smallUrl,
		alt,
		photodetails: 'ƒ/ 1 ISO mm',
		date,
		width: Number.isFinite(width) ? width : 400,
		height: Number.isFinite(height) ? height : 267
	};
}

function formatForPhotoJs(obj) {
	return [
		'{',
		`    hdUrl: '${obj.hdUrl}',`,
		`    smallUrl: '${obj.smallUrl}',`,
		`    alt: '${obj.alt.replace(/'/g, "\\'")}',`,
		`    photodetails: '${obj.photodetails}',`,
		`    date: '${obj.date}',`,
		`    width: ${obj.width},`,
		`    height: ${obj.height}`,
		'},'
	].join('\n');
}

function readInput() {
	if (process.argv.length > 2) {
		return process.argv.slice(2).join(' ').trim();
	}

	if (!process.stdin.isTTY) {
		return new Promise((resolve) => {
			let data = '';
			process.stdin.setEncoding('utf8');
			process.stdin.on('data', (chunk) => {
				data += chunk;
			});
			process.stdin.on('end', () => resolve(data.trim()));
		});
	}

	return '';
}

async function main() {
	const input = (EMBED_CODE || '').trim() || (await readInput());
	if (!input) {
		usage();
		process.exitCode = 1;
		return;
	}

	try {
		const parsed = parseEmbedCode(input);
		console.log(formatForPhotoJs(parsed));
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exitCode = 1;
	}
}

main();
