//extract file name
class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let start = dirtyFileName.indexOf("_"),
      end = dirtyFileName.lastIndexOf(".");
    return dirtyFileName.slice(start + 1, end);
  }
}
