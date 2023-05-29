require("dotenv").config();
const AWS = require('aws-sdk');
const multer = require("multer");


const bucketName = process.env.AWS_BUCKET_NAME;


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION
});

const upload = multer({storage: multer.memoryStorage()})


// UPLOAD FILE TO S3
const uploadImage = async (req, res, next) => {
  try {
    const uploadParams = {
      Bucket: bucketName,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    }
    const result = await s3.upload(uploadParams).promise()
    res.status(200).json({message: "sucessfully uploaded", imageURL: result.Location})
    next()
  } catch (error) {
    console.log({error})
    res.status(500).json({error: 'Error uploading file'});
  }
}

const downloadImage = async (req, res, next) => {
  try {
    const key = req.query.key;

    const downloadParams = {
      Bucket: bucketName,
      Key: key,
    }

    s3.getObject(downloadParams, (err, data) =>{
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao baixar a imagem', error: err });
      }

      // Configurar o tipo de conteúdo (content-type) da resposta
      res.setHeader('Content-Type', data.ContentType);

      // Configurar o cabeçalho (header) de cache para evitar que a imagem seja baixada a cada vez que ela é solicitada
      res.setHeader('Cache-Control', 'public, max-age=31536000');

      // Enviar a imagem como resposta
      res.send(data.Body);
    })

  } catch (e) {
    console.log('error: ', e)
    throw new Error(e)
  }
}

const deleteImage = async (req, res, next) => {
  try {
    const key = req.params.key;

    const deleteParams = {
      Bucket: bucketName,
      Key: key,
    };

    s3.deleteObject(deleteParams, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao excluir a imagem', error: err });
      }

      res.status(200).json({ message: 'Imagem excluída com sucesso' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a imagem' });
  }
};


module.exports = {uploadImage, upload, downloadImage, deleteImage};