import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        //onde serão armazenados os arquivos enviados pelo usuário
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        //request recebe as informações da requisição que vem do front-end
        //file -> dados do arquivo (nome, extensão, tamanho, etc)
        //callbck -> função que será chamada quando terminar de processar o filename, que é o nome que quer dar ao arquivo (gera um nome único)
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}