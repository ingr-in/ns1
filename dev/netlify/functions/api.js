exports.handler = async function () {
    try {
        const response = await fetch("https://sipa.ingr.in/api.php", {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "application/json",
                "Referer": "https://su.ru.ingr.in/"
            }
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: "Error from API: " + response.status
            };
        }

        const data = await response.text();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
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
