import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'tourData.json');

        const jsonData = fs.readFileSync(filePath);
        const data = JSON.parse(jsonData);
        return new Response(JSON.stringify(data), {
            status: 200,
        });
    } catch (error) {
        console.error("Error fetching data:", error);  // Detaylı hata loglama
        return new Response(
            JSON.stringify({ error: "Data could not be fetched" }),
            { status: 500 }
        );
    }
}
