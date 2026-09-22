
const supabaseUrl = 'https://ysuxnynwombpnouxoowx.supabase.co'; 
const supabaseKey = 'sb_publishable_1AgSqjihSfP_H8TUGBvUZw_9aMt9Zz7';

let supabaseClient = null;

// 2. Función para inicializar la conexión
function conectarSupabase() {
    try {
        // Inicializa el cliente global de Supabase
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
        
        // Si se crea el objeto correctamente, mostramos el mensaje de éxito
        alert("CONEXION EXITOSA");
        console.log("Cliente Supabase inicializado correctamente.");
    } catch (error) {
        alert("ERROR DE CONEXION");
        console.error("Detalles del error:", error);
    }
}

// 3. Asignar el evento click al botón del formulario
document.getElementById('btnConectar').addEventListener('click', conectarSupabase);