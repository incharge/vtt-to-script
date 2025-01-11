# vtt-to-script

## What this program does

Convert a WebVTT file to a more easily readable text format.

- Remove the WEBVTT token at the start of the file
- Remove empty lines
- Remove line numbers
- Round timestamps down to whole seconds
- Group together text from the same speaker

This program was created to convert zoom transcripts to a format suitable for use by a supervisor or mentor who is reviewing the recordings. WebVTT transcript files are created automatically by the zoom `Record to the cloud` feature. They can be downloaded from https://zoom.us/recording/

## Usage

The program reads from the standard input and writes to the standard output.

```
'node' index.mjs < input.vtt > output.txt
```

## Example 
```
WEBVTT

1
00:00:05.790 --> 00:00:13.514
Christina: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

2
00:00:15.060 --> 00:00:16.120
Christina: Et dolore magna aliqua. Ut enim ad minim veniam.

3
00:00:16.129 --> 00:00:17.549
Chris: Quis nostrud exercitation ullamco?

4
00:00:18.010 --> 00:00:20.907
Chris: Laboris nisi ut aliquip ex ea commodo consequat.
```

The WebVTT file above is converted to the text below.

```
00:00:05 Christina: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Et dolore magna aliqua. Ut enim ad minim veniam.
00:00:16 Chris: Quis nostrud exercitation ullamco? Laboris nisi ut aliquip ex ea commodo consequat.
```
