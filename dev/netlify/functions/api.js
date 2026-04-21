exports.handler = async function () {
    try {
        const res = await fetch("https://sipa.ingr.in/api.php", {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const data = await res.text();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
