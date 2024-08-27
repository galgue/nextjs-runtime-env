export async function GET() {
  try {
    console.log("Health check passed");
    return new Response(
      `OK: 

      ${process.env["SKIP_ENV_VALIDATION"]}

      ${JSON.stringify(process.env)}
      `,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Health check failed", error);
    return new Response(error as BodyInit, {
      status: 500,
    });
  }
}
