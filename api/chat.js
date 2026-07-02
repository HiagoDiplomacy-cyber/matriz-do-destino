export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }
    
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        return res.status(500).json({ error: 'Chave API do Gemini não configurada nas variáveis de ambiente do servidor' });
    }
    
    const { question, name, day, month, year, results } = req.body;
    
    if (!question || !name || !results) {
        return res.status(400).json({ error: 'Parâmetros incompletos na requisição' });
    }
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
    
    const systemPrompt = `Você é o Oráculo Cármico da Matriz do Destino. O usuário é ${name}, nascido em ${day}/${month}/${year}.
Sua Matriz de nascimento calculou as seguintes chaves de arcanos (são energias baseadas no Tarô):
- Essência Central (Ponto E): ${results.E}
- Retrato Social (Ponto A): ${results.A}
- Talentos Espirituais (Ponto B): ${results.B}
- Bloqueio Cármico (Ponto C): ${results.C}
- Cauda Cármica (D): Código ${results.d2}-${results.d1}-${results.D}
- Linha do Amor (♥): ${results.love_pt}
- Linha Financeira ($): ${results.money_pt}

Responda à pergunta do usuário de forma mística, sábia, amorosa e profunda em português. Mantenha os parágrafos fluidos e dê conselhos específicos conectando-os diretamente com os arcanos do mapa dele acima.`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: systemPrompt },
                            { text: `Pergunta do usuário: "${question}"` }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(response.status).json({ error: 'Erro na Gemini API', details: errText });
        }

        const resData = await response.json();
        return res.status(200).json(resData);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
