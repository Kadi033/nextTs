import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const GET = async () => {
  try {
    let { data, error } = await supabase.from("posts").select("*");

    if (error) {
      console.error("Error fetching blog:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // თუ მონაცემები არ არის მასივი
    if (!Array.isArray(data)) {
      return new Response(JSON.stringify({ error: "blog is not an array" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // წარმატებით დაბრუნება მონაცემებით
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
