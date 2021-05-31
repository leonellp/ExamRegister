using System.IO;


namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ImagemDownloadDTO
    {
        public Stream stream { get; set; }
        public string streamType { get; set; }
        public string nomeImagem { get; set; }
        
    }
}
