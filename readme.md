# vtt-to-script

## What this program does

Convert a WebVTT file to a more easily readable text format.

- Remove the WEBVTT token at the start of the file
- Remove empty lines
- Remove line numbers
- Round timestamps down to whole seconds
- Group together text from the same speaker

This program was created to convert zoom transcripts to a format suitable for use by a supervisor or mentor who is reviewing the recordings. WebVTT transcript files are created automatically by the zoom `Record to the cloud` feature. They can be downloaded from https://zoom.us/recording/

## Installation

### Install Node.js
vtt-to-script requires Node.js to run. Node.js always runs inside a bash shell, regardless of whether the system is running Microsoft Windows, Linux, or MacOs.

To check whether Node.js is installed already on your system, run the following commands. Each command should output a version number.
```
node -v
npm -v
```

For installation instructions, see [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to run.

### Install Node.js on Microsoft Windows using win-code-node
win-code-node helps you get up and running quickly with Node.js on Microsoft Windows.

Start a command prompt and run the collowing commands:
```
mkdir my-node
cd my-node
curl -OJ https://raw.githubusercontent.com/incharge/win-code-node/main/bootstrap.bat
.\bootstrap.bat --nocode
```

If the following error is displayed, then try disabling any anti-virus software that is blocking internet access e.g. `AVG WebShield`
```
curl: (35) schannel: next InitializeSecurityContext failed: CRYPT_E_NO_REVOCATION_CHECK (0x80092012) - The revocation function was unable to check revocation for the certificate.
```

Subsequently, to start a bash shell, from Windows Explorer or a command prompt run `win-code-node\bash.bat`

### Install vtt-to-script

Install the vtt-to-script Node.js package using npm:

```
npm i @incharge/vtt-to-script
```

## Usage
The program reads from the standard input and writes to the standard output.

```
'node' node_modules/@incharge/vtt-to-script/index.mjs < node_modules/@incharge/vtt-to-script/example.vtt > example.txt

# If /node_modules/.bin is added to the $PATH then you can use the vtt-to-script shortcut
PATH=$(pwd)/node_modules/.bin:$PATH
vtt-to-script < input.vtt > output.txt
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
