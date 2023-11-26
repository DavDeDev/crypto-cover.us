import axios from 'axios';
import { JSDOM } from 'jsdom';

async function fetchData(url: string): Promise<string> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to retrieve the webpage. Error: ${error}`);
    }
}

function extractTableData(html: string): void {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find the table on the page (assuming it's the first table)
    const table = document.querySelector('table');

    if (table) {
        // Extract data from the table
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            // Extract data from each cell (assuming it's a simple table)
            const columns = row.querySelectorAll('td');
            columns.forEach(column => {
                console.log(column.textContent?.trim()); // Print the text content of each cell
            });
            console.log(); // Separate rows with an empty line
        });
    } else {
        console.log('Table not found on the webpage.');
    }
}

(async () => {
    const url = 'https://dfpi.ca.gov/crypto-scams/';
    const html = await fetchData(url);
    extractTableData(html);
})();
