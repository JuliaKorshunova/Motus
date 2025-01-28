import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.get('/test-file', (req, res) => {
    const testFilePath = path.join('C:/Users/fomic/vite-project/public/test/test.txt');
    
    fs.readFile(testFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return res.status(500).send('Ошибка при чтении файла.');
        }
        res.send(data);
    });
});

app.get('/', (req, res) => {
    const inputVideo = path.join('C:/Users/fomic/vite-project/public/videoplayback.mp4');
    const outputPlaylist = path.join('/test/output.m3u8');

    console.log('Проверка входного файла:', inputVideo);
    if (!fs.existsSync(inputVideo)) {
        console.error('Ошибка: входной файл не найден.');
        return res.status(404).send('Входной файл не найден.');
    }
    
    // Проверка существования входного файла
    console.log('Проверка входного файла:', inputVideo);
    if (!fs.existsSync(inputVideo)) {
        console.error('Ошибка: входной файл не найден.');
        return res.status(404).send('Входной файл не найден.');
    }

    // Проверка существования выходной директории
    const outputDir = path.dirname(outputPlaylist);
    console.log('Проверка директории для выходных файлов:', outputDir);
    if (!fs.existsSync(outputDir)) {
        console.log('Директория не найдена. Создаю новую директорию...');
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Запуск FFmpeg для конвертации...');
    const ffmpegProcess = spawn('ffmpeg', [
        '-i', inputVideo,
        '-c', 'copy',  // Исправлено здесь
        '-start_number', '0',
        '-hls_time', '10',
        '-hls_list_size', '0',
        '-f', 'hls',
        outputPlaylist
    ]);

    ffmpegProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ffmpegProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data.toString()}`);
    });

    ffmpegProcess.on('close', (code) => {
        if (code === 0) {
            res.send('Конвертация завершена!');
        } else {
            console.error(`Ошибка при выполнении FFmpeg, код: ${code}`);
            res.status(500).send(`Ошибка при конвертации видео, код: ${code}`);
        }
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
  