const express = require("express");

const app = express();

app.get("/txt", (req, res) => {
    const {tl, tr, wl, wr, c} = req.query;

    res.set('Content-Type', 'image/svg+xml');   

    if(tl && tr && wl && wr) {
        res.status(200).send(`
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="${parseInt(wl) + parseInt(wr)}">
                <g>
                    <rect width="${wl}" height="20" fill="#555" rx="4" />
                    <rect x="${wl - 5}" width="10" height="20" fill="${c ? `#${c}` : '#4c1'}" />
                    <rect x="${wl - 5}" width="${wr}" height="20" fill="${c ? `#${c}` : '#4c1'}" rx="4" />
                </g>
                <text font-family="sans-serif" font-size="12" x="6" y="14" fill="white">${tl}</text>
                <text font-family="sans-serif" font-size="12" x="${wl}" y="14" fill="white">${tr}</text>
            </svg>
        `);
    } else {
        res.status(404).send(`
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="${parseInt(wl) + parseInt(wr)}">
            <g>
                <rect width="45" height="20" fill="#555" rx="4" />
                <rect x="40" width="10" height="20" fill="red" />
                <rect x="40" width="100" height="20" fill="red" rx="4" />
            </g>
            <text font-family="sans-serif" font-size="12" x="6" y="14" fill="white">Error</text>
            <text font-family="sans-serif" font-size="12" x="45" y="14" fill="white">Params require</text>
        </svg>
        `);
    }
})

app.listen(3000, () => {
    console.log("server running in port 3000");
})