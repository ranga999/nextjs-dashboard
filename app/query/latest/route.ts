import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Fetch latest invoice from the database
async function latestInvoices() {

    const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY date DESC LIMIT 1;
    `;

    return data;
}                   

export async function GET() {
    try {
        return Response.json(await latestInvoices());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }                           
}

