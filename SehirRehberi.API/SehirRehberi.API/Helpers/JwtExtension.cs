using Microsoft.AspNetCore.Http;

namespace SehirRehberi.API.Helpers
{
    public static class JwtExtension
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message); //Bir hata olduğunda mesaj gönder
            response.Headers.Add("Access-Control-Allow-Origin", "*"); //CORS engellemek için tüm kullanıcılar istekte bulunabilir.
            response.Headers.Add("Access-Control-Expose-Header", "Application-Error"); //Bir hata olduğunda kullanıcı görebilsin.
        }
    }
}