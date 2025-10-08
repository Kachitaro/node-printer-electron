# 1. Node Printer for Electron and Node.js

**No recompilation required when upgrading Node.js versions, thanks to N-API!** 🎉

Native bind printers on POSIX and Windows OS from Node.js, Electron, and node-webkit.

!npm version !Prebuild Binaries and Publish

> Supports Node.js versions from 22.20.0 onwards, including the latest versions, thanks to the transition to N-API.

---

### 1.0.1. Reason:

I was involved in a project where I needed to print from Node.js. This is the reason why I created this project and I want to share my code with others.

### 1.0.2. Features:

- No dependencies on NAN or V8;
- Native method wrappers for Windows and POSIX (which uses CUPS 1.4/MAC OS X 10.6) APIs;
- Compatible with Node.js versions that support N-API, ensuring long-term stability and compatibility;
- Compatible with Electron versions that support N-API, reducing the need for frequent recompilation;
- `getPrinters()` to enumerate all installed printers with current jobs and statuses;
- `getPrinter(printerName)` to get a specific/default printer info with current jobs and statuses;
- `getPrinterDriverOptions(printerName)` (POSIX only) to get a specific/default printer driver options such as supported paper size and other info;
- `getSelectedPaperSize(printerName)` (POSIX only) to get a specific/default printer default paper size from its driver options;
- `getDefaultPrinterName()` returns the default printer name;
- `printDirect(options)` to send a job to a specific/default printer, now supports CUPS options passed in the form of a JS object (see `cancelJob.js` example). To print a PDF from Windows, it is possible by using node-pdfium module to convert a PDF format into EMF and then send it to the printer as EMF;
- `printFile(options)` (POSIX only) to print a file;
- `getSupportedPrintFormats()` to get all possible print formats for the `printDirect` method, which depends on the OS. `RAW` and `TEXT` are supported on all OSes;
- `getJob(printerName, jobId)` to get specific job info including job status;
- `setJob(printerName, jobId, command)` to send a command to a job (e.g., `'CANCEL'` to cancel the job);
- `getSupportedJobCommands()` to get supported job commands for `setJob()`, depending on the OS. The `'CANCEL'` command is supported on all OSes.

### 1.0.3. How to install:

```
npm install node-printer-electron
```

### 1.0.4. Node.js Version Support:

This project supports Node.js versions from 22.20.0 onwards. N-API ensures that native addons do not require recompilation when upgrading Node.js versions. For more details, refer to the [Node.js N-API documentation](https://nodejs.org/api/n-api.html)¹(https://nodejs.org/api/n-api.html).

Feel free to download, test, and propose new features.

## 1.2. License

This project is licensed under the MIT License.

### 1.2.1. Keywords:

- node-printer
- printer
- electron-printer
- node-addon-api
- POSIX printer
- Windows printer
- CUPS printer
- print job
- printer driver

---
