﻿import { formatTime } from "../datetime.js";

const videoSection = document.querySelector(".video");
const video = videoSection.querySelector("video");
const controls = videoSection.querySelector(".video-controls");
const playButton = videoSection.querySelector(".video-play");
const pauseButton = videoSection.querySelector(".video-pause");
const time = videoSection.querySelector(".video-time");

function ready() {
    controls.style.display = "block";
};

function play() {
    video.play();
    playButton.style.display = "none";
    pauseButton.style.display = "";
};

function pause() {
    video.pause();
    playButton.style.display = "";
    pauseButton.style.display = "none";
};

function updateTime() {
    time.textContent = formatTime(video.currentTime);
};

pauseButton.style.display = "none";

video.addEventListener("loadeddata", ready, false);
video.addEventListener("timeupdate", updateTime, false);
playButton.addEventListener("click", play, false);
pauseButton.addEventListener("click", pause, false);

// SIG // Begin signature block
// SIG // MIIaVgYJKoZIhvcNAQcCoIIaRzCCGkMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFOvBxqPl3h5I
// SIG // nU5Xcn5+gCntt58moIIVJjCCBJkwggOBoAMCAQICEzMA
// SIG // AACdHo0nrrjz2DgAAQAAAJ0wDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwOTA0
// SIG // MjE0MjA5WhcNMTMwMzA0MjE0MjA5WjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqRJbBD7Ipxl
// SIG // ohaYO8thYvp0Ka2NBhnScVgZil5XDWlibjagTv0ieeAd
// SIG // xxphjvr8oxElFsjAWCwxioiuMh6I238+dFf3haQ2U8pB
// SIG // 72m4aZ5tVutu5LImTXPRZHG0H9ZhhIgAIe9oWINbSY+0
// SIG // 39M11svZMJ9T/HprmoQrtyFndNT2eLZhh5iUfCrPZ+kZ
// SIG // vtm6Y+08Tj59Auvzf6/PD7eBfvT76PeRSLuPPYzIB5Mc
// SIG // 87115PxjICmfOfNBVDgeVGRAtISqN67zAIziDfqhsg8i
// SIG // taeprtYXuTDwAiMgEPprWQ/grZ+eYIGTA0wNm2IZs7uW
// SIG // vJFapniGdptszUzsErU4RwIDAQABo4IBDTCCAQkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFN5R3Bvy
// SIG // HkoFPxIcwbzDs2UskQWYMB8GA1UdIwQYMBaAFMsR6MrS
// SIG // tBZYAck3LjMWFrlMmgofMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY0NvZFNpZ1BDQV8wOC0zMS0yMDEw
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljQ29kU2lnUENBXzA4LTMxLTIwMTAuY3J0MA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQAqpPfuwMMmeoNiGnicW8X9
// SIG // 7BXEp3gT0RdTKAsMAEI/OA+J3GQZhDV/SLnP63qJoc1P
// SIG // qeC77UcQ/hfah4kQ0UwVoPAR/9qWz2TPgf0zp8N4k+R8
// SIG // 1W2HcdYcYeLMTmS3cz/5eyc09lI/R0PADoFwU8GWAaJL
// SIG // u78qA3d7bvvQRooXKDGlBeMWirjxSmkVXTP533+UPEdF
// SIG // Ha7Ki8f3iB7q/pEMn08HCe0mkm6zlBkB+F+B567aiY9/
// SIG // Wl6EX7W+fEblR6/+WCuRf4fcRh9RlczDYqG1x1/ryWlc
// SIG // cZGpjVYgLDpOk/2bBo+tivhofju6eUKTOUn10F7scI1C
// SIG // dcWCVZAbtVVhMIIEujCCA6KgAwIBAgIKYQKSSgAAAAAA
// SIG // IDANBgkqhkiG9w0BAQUFADB3MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EwHhcNMTIwMTA5MjIyNTU5WhcNMTMwNDA5MjIy
// SIG // NTU5WjCBszELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsGA1UE
// SIG // CxMETU9QUjEnMCUGA1UECxMebkNpcGhlciBEU0UgRVNO
// SIG // OkI4RUMtMzBBNC03MTQ0MSUwIwYDVQQDExxNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzWPD96K1R9n5OZRT
// SIG // rGuPpnk4IfTRbj0VOBbBcyyZj/vgPFvhokyLsquLtPJK
// SIG // x7mTUNEm9YdTsHp180cPFytnLGTrYOdKjOCLXsRWaTc6
// SIG // KgRdFwHIv6m308mro5GogeM/LbfY5MR4AHk5z/3HZOIj
// SIG // EnieDHYnSY+arA504wZVVUnI7aF8cEVhfrJxFh7hwUG5
// SIG // 0tIy6VIk8zZQBNfdbzxJ1QvUdkD8ZWUTfpVROtX/uJqn
// SIG // V2tLFeU3WB/cAA3FrurfgUf58FKu5s9arOAUSqZxlID6
// SIG // /bAjMGDpg2CsDiQe/xHy56VVYpXun3+eKdbNSwp2g/BD
// SIG // BN8GSSDyU1pEsFF6OQIDAQABo4IBCTCCAQUwHQYDVR0O
// SIG // BBYEFM0ZrGFNlGcr9q+UdVnb8FgAg6E6MB8GA1UdIwQY
// SIG // MBaAFCM0+NlSRnAK7UD7dvuzK7DDNbMPMFQGA1UdHwRN
// SIG // MEswSaBHoEWGQ2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29mdFRpbWVT
// SIG // dGFtcFBDQS5jcmwwWAYIKwYBBQUHAQEETDBKMEgGCCsG
// SIG // AQUFBzAChjxodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY3Jvc29mdFRpbWVTdGFtcFBDQS5j
// SIG // cnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcN
// SIG // AQEFBQADggEBAFEc1t82HdyAvAKnxpnfFsiQBmkVmjK5
// SIG // 82QQ0orzYikbeY/KYKmzXcTkFi01jESb8fRcYaRBrpqL
// SIG // ulDRanlqs2KMnU1RUAupjtS/ohDAR9VOdVKJHj+Wao8u
// SIG // QBQGcu4/cFmSXYXtg5n6goSe5AMBIROrJ9bMcUnl2h3/
// SIG // bzwJTtWNZugMyX/uMRQCN197aeyJPkV/JUTnHxrWxRrD
// SIG // SuTh8YSY50/5qZinGEbshGzsqQMK/Xx6Uh2ca6SoD5iS
// SIG // pJJ4XCt4432yx9m2cH3fW3NTv6rUZlBL8Mk7lYXlwUpl
// SIG // nSVYULsgVJF5OhsHXGpXKK8xx5/nwx3uR/0n13/PdNxl
// SIG // xT8wggW8MIIDpKADAgECAgphMyYaAAAAAAAxMA0GCSqG
// SIG // SIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNjb20x
// SIG // GTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTArBgNV
// SIG // BAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1
// SIG // dGhvcml0eTAeFw0xMDA4MzEyMjE5MzJaFw0yMDA4MzEy
// SIG // MjI5MzJaMHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xIzAhBgNV
// SIG // BAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnJZ
// SIG // XBkwZL8dmmAgIEKZdlNsPhvWb8zL8epr/pcWEODfOnSD
// SIG // GrcvoDLs/97CQk4j1XIA2zVXConKriBJ9PBorE1LjaW9
// SIG // eUtxm0cH2v0l3511iM+qc0R/14Hb873yNqTJXEXcr609
// SIG // 4CholxqnpXJzVvEXlOT9NZRyoNZ2Xx53RYOFOBbQc1sF
// SIG // umdSjaWyaS/aGQv+knQp4nYvVN0UMFn40o1i/cvJX0Yx
// SIG // ULknE+RAMM9yKRAoIsc3Tj2gMj2QzaE4BoVcTlaCKCoF
// SIG // MrdL109j59ItYvFFPeesCAD2RqGe0VuMJlPoeqpK8kbP
// SIG // Nzw4nrR3XKUXno3LEY9WPMGsCV8D0wIDAQABo4IBXjCC
// SIG // AVowDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUyxHo
// SIG // ytK0FlgByTcuMxYWuUyaCh8wCwYDVR0PBAQDAgGGMBIG
// SIG // CSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYE
// SIG // FP3RMU7TJoqV4ZhgO6gxb6Y8vNgtMBkGCSsGAQQBgjcU
// SIG // AgQMHgoAUwB1AGIAQwBBMB8GA1UdIwQYMBaAFA6sgmBA
// SIG // VieX5SUT/CrhClOVWeSkMFAGA1UdHwRJMEcwRaBDoEGG
// SIG // P2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL21pY3Jvc29mdHJvb3RjZXJ0LmNybDBU
// SIG // BggrBgEFBQcBAQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // cm9zb2Z0Um9vdENlcnQuY3J0MA0GCSqGSIb3DQEBBQUA
// SIG // A4ICAQBZOT5/Jkav629AsTK1ausOL26oSffrX3XtTDst
// SIG // 10OtC/7L6S0xoyPMfFCYgCFdrD0vTLqiqFac43C7uLT4
// SIG // ebVJcvc+6kF/yuEMF2nLpZwgLfoLUMRWzS3jStK8cOeo
// SIG // DaIDpVbguIpLV/KVQpzx8+/u44YfNDy4VprwUyOFKqSC
// SIG // HJPilAcd8uJO+IyhyugTpZFOyBvSj3KVKnFtmxr4HPBT
// SIG // 1mfMIv9cHc2ijL0nsnljVkSiUc356aNYVt2bAkVEL1/0
// SIG // 2q7UgjJu/KSVE+Traeepoiy+yCsQDmWOmdv1ovoSJgll
// SIG // OJTxeh9Ku9HhVujQeJYYXMk1Fl/dkx1Jji2+rTREHO4Q
// SIG // FRoAXd01WyHOmMcJ7oUOjE9tDhNOPXwpSJxy0fNsysHs
// SIG // cKNXkld9lI2gG0gDWvfPo2cKdKU27S0vF8jmcjcS9G+x
// SIG // PGeC+VKyjTMWZR4Oit0Q3mT0b85G1NMX6XnEBLTT+yzf
// SIG // H4qerAr7EydAreT54al/RrsHYEdlYEBOsELsTu2zdnnY
// SIG // CjQJbRyAMR/iDlTd5aH75UcQrWSY/1AWLny/BSF64pVB
// SIG // J2nDk4+VyY3YmyGuDVyc8KKuhmiDDGotu3ZrAB2WrfIW
// SIG // e/YWgyS5iM9qqEcxL5rc43E91wB+YkfRzojJuBj6DnKN
// SIG // waM9rwJAav9pm5biEKgQtDdQCNbDPTCCBgcwggPvoAMC
// SIG // AQICCmEWaDQAAAAAABwwDQYJKoZIhvcNAQEFBQAwXzET
// SIG // MBEGCgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixk
// SIG // ARkWCW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0
// SIG // IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTA3
// SIG // MDQwMzEyNTMwOVoXDTIxMDQwMzEzMDMwOVowdzELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAn6Fssd/bSJIqfGsuGeG94uPF
// SIG // mVEjUK3O3RhOJA/u0afRTK10MCAR6wfVVJUVSZQbQpKu
// SIG // mFwwJtoAa+h7veyJBw/3DgSY8InMH8szJIed8vRnHCz8
// SIG // e+eIHernTqOhwSNTyo36Rc8J0F6v0LBCBKL5pmyTZ9co
// SIG // 3EZTsIbQ5ShGLieshk9VUgzkAyz7apCQMG6H81kwnfp+
// SIG // 1pez6CGXfvjSE/MIt1NtUrRFkJ9IAEpHZhEnKWaol+TT
// SIG // BoFKovmEpxFHFAmCn4TtVXj+AZodUAiFABAwRu233iNG
// SIG // u8QtVJ+vHnhBMXfMm987g5OhYQK1HQ2x/PebsgHOIktU
// SIG // //kFw8IgCwIDAQABo4IBqzCCAacwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAdBgNVHQ4EFgQUIzT42VJGcArtQPt2+7MrsMM1
// SIG // sw8wCwYDVR0PBAQDAgGGMBAGCSsGAQQBgjcVAQQDAgEA
// SIG // MIGYBgNVHSMEgZAwgY2AFA6sgmBAVieX5SUT/CrhClOV
// SIG // WeSkoWOkYTBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHmCEHmtFqFKoKWtTHNY9AcTLmUwUAYDVR0fBEkw
// SIG // RzBFoEOgQYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvbWljcm9zb2Z0cm9vdGNl
// SIG // cnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBEBggrBgEFBQcw
// SIG // AoY4aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9j
// SIG // ZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5jcnQwEwYDVR0l
// SIG // BAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQEFBQADggIB
// SIG // ABCXisNcA0Q23em0rXfbznlRTQGxLnRxW20ME6vOvnuP
// SIG // uC7UEqKMbWK4VwLLTiATUJndekDiV7uvWJoc4R0Bhqy7
// SIG // ePKL0Ow7Ae7ivo8KBciNSOLwUxXdT6uS5OeNatWAweaU
// SIG // 8gYvhQPpkSokInD79vzkeJkuDfcH4nC8GE6djmsKcpW4
// SIG // oTmcZy3FUQ7qYlw/FpiLID/iBxoy+cwxSnYxPStyC8jq
// SIG // cD3/hQoT38IKYY7w17gX606Lf8U1K16jv+u8fQtCe9RT
// SIG // ciHuMMq7eGVcWwEXChQO0toUmPU8uWZYsy0v5/mFhsxR
// SIG // VuidcJRsrDlM1PZ5v6oYemIp76KbKTQGdxpiyT0ebR+C
// SIG // 8AvHLLvPQ7Pl+ex9teOkqHQ1uE7FcSMSJnYLPFKMcVpG
// SIG // QxS8s7OwTWfIn0L/gHkhgJ4VMGboQhJeGsieIiHQQ+kr
// SIG // 6bv0SMws1NgygEwmKkgkX1rqVu+m3pmdyjpvvYEndAYR
// SIG // 7nYhv5uCwSdUtrFqPYmhdmG0bqETpr+qR/ASb/2KMmyy
// SIG // /t9RyIwjyWa9nR2HEmQCPS2vWY+45CHltbDKY7R4VAXU
// SIG // QS5QrJSwpXirs6CWdRrZkocTdSIvMqgIbqBbjCW/oO+E
// SIG // yiHW6x5PyZruSeD3AWVviQt9yGnI5m7qp5fOMSn/DsVb
// SIG // XNhNG6HY+i+ePy5VFmvJE6P9MYIEnDCCBJgCAQEwgZAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0ECEzMAAACdHo0n
// SIG // rrjz2DgAAQAAAJ0wCQYFKw4DAhoFAKCBvjAZBgkqhkiG
// SIG // 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
// SIG // MQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQU
// SIG // TZcSUNSfN6Zeb3vK5lK7ptNSqtIwXgYKKwYBBAGCNwIB
// SIG // DDFQME6gJoAkAE0AaQBjAHIAbwBzAG8AZgB0ACAATABl
// SIG // AGEAcgBuAGkAbgBnoSSAImh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9sZWFybmluZyAwDQYJKoZIhvcNAQEBBQAE
// SIG // ggEANhHj5K9iJ1aZnSUK/Ytjku0D/Il9mRjWZLZuHPgE
// SIG // qQXltPNPINQatcJi7NKEzVfQ3A9nlXNnac/5fw4HRTOH
// SIG // 4cha/hhm56x70Meydw9/brgbMiFh5AqdFp1bQeQ2885X
// SIG // h4iDckaDnZ8yersvhb1Vn954H4dXd4wEdCrZsag0K8ZL
// SIG // dhOzug4lw4DU1Wa3INxuF4ZqfWCjAUd3D5cX4w354+NI
// SIG // e5+OoUnG5fM6hGdK3l0ppwLCMFJQ/DusgpkrukgnGUmm
// SIG // UXJ7x+jqGInH6x9XXJMy8EiQ7JuREqlHqdd8c++w7za3
// SIG // o4mW8mSJtJN6R83n91UA/sHwA20m7ULpFA4tE6GCAh8w
// SIG // ggIbBgkqhkiG9w0BCQYxggIMMIICCAIBATCBhTB3MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0ECCmECkkoAAAAAACAwCQYF
// SIG // Kw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0B
// SIG // BwEwHAYJKoZIhvcNAQkFMQ8XDTEyMTExNTAwMDgwM1ow
// SIG // IwYJKoZIhvcNAQkEMRYEFNakkZYn82jVxQx9ZzoShAUC
// SIG // 6x5HMA0GCSqGSIb3DQEBBQUABIIBACAGbudmtI0MUBGq
// SIG // FibNii3LqJxso6aqrKHN3wVlWy5IBrmH++nk6xoJGRXj
// SIG // tx2OCXwwXQzLAanBxVQTv0ocoMfDs/S1ZbfYZ+I5s+97
// SIG // hIwztTDz94vrT31yTKf1LYQPyMovbyY6+nwxmrhGonqH
// SIG // DcGzc0bqTumc31f9UgBwnfeEr5XHfrGrXba+dHjaF+L+
// SIG // 7vH0w4L+RAIg1ebyd7cBoV8KNVtGj5G9A0WvQTgEo+Z0
// SIG // Xw0blMGBtejNXA4Se6FJaIQxJ7JDYV7WrFm4UBQnE3bw
// SIG // R2Nu1n5qSGjta0fOh0PXAeWhOoiautJaK3CdBRP7cLiR
// SIG // V7Jec2ZHRJ1p/G+RN0o=
// SIG // End signature block

// SIG // Begin signature block
// SIG // MIIdkAYJKoZIhvcNAQcCoIIdgTCCHX0CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFJ4tI8ciSsvN
// SIG // KeN6SNdF0uPXxMtxoIIYbjCCBN4wggPGoAMCAQICEzMA
// SIG // AADraarMPimfLTkAAAAAAOswDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE4MDgyMzIw
// SIG // MTkzMFoXDTE5MTEyMzIwMTkzMFowgc4xCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBPcGVy
// SIG // YXRpb25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpCOEVDLTMwQTQtNzE0NDElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALVI
// SIG // FTEwkU+DiTtDKbsL8flzuUJj94dKygCn3ixofBGlpi66
// SIG // Z3ESA+15sqLGS62kgx6M/4WrjL5ZwiRRPojE70w5Eooq
// SIG // DWXACgSuyQyKtLz8wOefb9lLp8AR2lPjbnkup2EwceeJ
// SIG // +iOEKYhPP8K93TM+HtdHgQF3fIeDmeGSv2JiX0sSVBjE
// SIG // p+9Ms5krioUO7SKlJplEiLdmd77v80YWyovAIp3ePgEk
// SIG // RaWDLhPtYQ+IyKcCdQlI2WYSNFLA0Wu5s+gjtkcAlFz0
// SIG // Y4F1703679s7/hfIw203xF7PEWTy8N3iBaNOoKlH2Iad
// SIG // VH8Pv+znrHOazODpEWNUxtow/53uT6kCAwEAAaOCAQkw
// SIG // ggEFMB0GA1UdDgQWBBQFt9Cmj3wDmdR8Il2SPLrWdyem
// SIG // pjAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWz
// SIG // DzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNy
// SIG // b3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEB
// SIG // BEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1l
// SIG // U3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMI
// SIG // MA0GCSqGSIb3DQEBBQUAA4IBAQB74NZgQkr46sJ1qUWR
// SIG // dLPOP3bjAAaxgLq9iUm3AjFXmNRs/cX7bm8LSJMWlEqr
// SIG // clJBjiVXYMJVDGQE+P7qdm0U/PerlSnBBzcHkhS6j8X3
// SIG // iRYLFM0Ps/X7R+EvfiF/le6NBweFaAfdkPUHXeeh6kSR
// SIG // Wi827KaVyaUl223bawY436IWEq5M5XHnVkOrADY7MJWG
// SIG // 2eHFsRgxAd2nfGE8y5z2bXMGOEeJ+PVDp1GrxvzQdLSU
// SIG // VGzDjuH8lADAa+EdtLWLnYL6F0SvAVVRH2D+pkGtUBuj
// SIG // Id6JbiW94ye6WKQ3zDEV4d0vWOqaH7uu7aHcWy+2n59V
// SIG // YtdXev24zekDB0p2MIIF/zCCA+egAwIBAgITMwAAAQNe
// SIG // JRyZH6MeuAAAAAABAzANBgkqhkiG9w0BAQsFADB+MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNyb3Nv
// SIG // ZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExMB4XDTE4MDcx
// SIG // MjIwMDg0OFoXDTE5MDcyNjIwMDg0OFowdDELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEeMBwGA1UEAxMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEA0ZR2NuaGqzb+aflGfIuIUMuQcH+wVakk
// SIG // HX455wWfD6x7l7LOcwr71JskXBa1Od0bfjNsEfw7JvOY
// SIG // ql1Ta6rD7BO40u/PV3/MZcuvTS4ysVYrTjQHif5pIb0+
// SIG // RPveEp2Fv3x2hn1ysXabYeaKZExGzrbVOox3k3dnIZy2
// SIG // WgZeR4b1PNEJyg09zbLpoVB40YSI4gE8IvyvlgjMXZnA
// SIG // 7eulWpiS9chATmpzr97jdHrTX0aXvOJnKHeZrMEOMRaP
// SIG // AA8B/kteVA/KxGU/CuOjRtv2LAM6Gb5oBRac5n80v6eH
// SIG // jWU5Jslj1O/F3b0l/v0o9DSGeawq1V8wkTvkFGrrscoE
// SIG // IwIDAQABo4IBfjCCAXowHwYDVR0lBBgwFgYKKwYBBAGC
// SIG // N0wIAQYIKwYBBQUHAwMwHQYDVR0OBBYEFEe+wMvhpj/9
// SIG // ZdY48gNdt69390D/MFAGA1UdEQRJMEekRTBDMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEWMBQGA1UEBRMNMjMwMDEyKzQzNzk2NTAfBgNV
// SIG // HSMEGDAWgBRIbmTlUAXTgqoXNzcitW2oynUClTBUBgNV
// SIG // HR8ETTBLMEmgR6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3JsMGEGCCsGAQUFBwEBBFUwUzBR
// SIG // BggrBgEFBQcwAoZFaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQELBQADggIBAJ/1yVMNPw0m7KJE2A3Rn2OW
// SIG // Bks/HlzFM6Okw2yvH8ABuutl7J4zEA+nrFvUvZBhF+cx
// SIG // 58MmtKz1J9NIk4aI/hI1kWQi0WstO6gsFZQp0jeW5jX/
// SIG // DM7IBhYWniSx4jn5bg542AwbtilgJ3Y0JJvduZd1ywE7
// SIG // rYISFiKAiRWEu5hQILAXJoZJr859RRVDNJbPgVwYLNST
// SIG // 8mer4nPIPaPN/DIeYBzpsBsw+yy7By6WhJNFKFRczZb9
// SIG // oNuB2LYwykOx80jAskYcXV52Klif1O7y9PpITLVhi7CM
// SIG // QemquJ2Q9P9qQg+5PukO7JT8jYC7eOMjp3hbsm0f+VnB
// SIG // fbbROcl54IMcYAraPbDR7Ta/RQfpGzZu5T07BQOn1Kcl
// SIG // Eo/mdqMTs0VaQzGC2tiErrmwH3X19h19URE3J+i1NYRx
// SIG // 91eqrvqJccmY0p5aZHa+jMN9FWqR8RT08tk1Mbjbcvq0
// SIG // dciIm2q/mEXHZrLX/86SkHXk6+aG0sgb2yfAW5VvSW9Y
// SIG // XWkq3lNL+OjKe/ZsFfkDGQ8RhapPmr+qV91gxvVxIPRR
// SIG // qJrK6dHrNEc9dfoi7FU/ahk5axDpWj+O9CN4MLLypjjL
// SIG // NY2qmFkkQLg6Z6QHX6D+2DtJE/sM4e0LbYNQzvB/PuDZ
// SIG // COiMIUpBwt7rjlvuA8Mdbm7mVDVmZ3J8GupS9iLEcj+u
// SIG // MIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDANBgkqhkiG
// SIG // 9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEwNDAzMTMw
// SIG // MzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQD
// SIG // ExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCfoWyx39tI
// SIG // kip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FMrXQwIBHr
// SIG // B9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cOBJjwicwf
// SIG // yzMkh53y9GccLPx754gd6udOo6HBI1PKjfpFzwnQXq/Q
// SIG // sEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VSDOQDLPtq
// SIG // kJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21StEWQn0gA
// SIG // SkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1VeP4Bmh1Q
// SIG // CIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuDk6FhArUd
// SIG // DbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGrMIIBpzAP
// SIG // BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQjNPjZUkZw
// SIG // Cu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYwEAYJKwYB
// SIG // BAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAUDqyCYEBW
// SIG // J5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJkiaJk/Is
// SIG // ZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3Nv
// SIG // ZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1Mc1j0BxMu
// SIG // ZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9taWNy
// SIG // b3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUHAQEESDBG
// SIG // MEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJvb3RDZXJ0
// SIG // LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG
// SIG // 9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vOeVFNAbEu
// SIG // dHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQmd16QOJX
// SIG // u69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I4vBTFd1P
// SIG // q5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4mS4N9wfi
// SIG // cLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsgP+IHGjL5
// SIG // zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfrTot/xTUr
// SIG // XqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S2hSY9Ty5
// SIG // ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6Yinvopsp
// SIG // NAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146SodDW4TsVx
// SIG // IxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGAnhUwZuhC
// SIG // El4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRfWupW76be
// SIG // mZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2YbRuoROm
// SIG // v6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9La9Zj7jk
// SIG // IeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmShxN1Ii8y
// SIG // qAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+JC33Iacjm
// SIG // buqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kTo/0wggd6
// SIG // MIIFYqADAgECAgphDpDSAAAAAAADMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMTAeFw0xMTA3MDgyMDU5MDlaFw0yNjA3
// SIG // MDgyMTA5MDlaMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTEwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIK
// SIG // AoICAQCr8PpyEBwurdhuqoIQTTS68rZYIZ9CGypr6VpQ
// SIG // qrgGOBoESbp/wwwe3TdrxhLYC/A4wpkGsMg51QEUMULT
// SIG // iQ15ZId+lGAkbK+eSZzpaF7S35tTsgosw6/ZqSuuegmv
// SIG // 15ZZymAaBelmdugyUiYSL+erCFDPs0S3XdjELgN1q2jz
// SIG // y23zOlyhFvRGuuA4ZKxuZDV4pqBjDy3TQJP4494HDdVc
// SIG // eaVJKecNvqATd76UPe/74ytaEB9NViiienLgEjq3SV7Y
// SIG // 7e1DkYPZe7J7hhvZPrGMXeiJT4Qa8qEvWeSQOy2uM1jF
// SIG // tz7+MtOzAz2xsq+SOH7SnYAs9U5WkSE1JcM5bmR/U7qc
// SIG // D60ZI4TL9LoDho33X/DQUr+MlIe8wCF0JV8YKLbMJyg4
// SIG // JZg5SjbPfLGSrhwjp6lm7GEfauEoSZ1fiOIlXdMhSz5S
// SIG // xLVXPyQD8NF6Wy/VI+NwXQ9RRnez+ADhvKwCgl/bwBWz
// SIG // vRvUVUvnOaEP6SNJvBi4RHxF5MHDcnrgcuck379GmcXv
// SIG // whxX24ON7E1JMKerjt/sW5+v/N2wZuLBl4F77dbtS+dJ
// SIG // KacTKKanfWeA5opieF+yL4TXV5xcv3coKPHtbcMojyyP
// SIG // QDdPweGFRInECUzF1KVDL3SV9274eCBYLBNdYJWaPk8z
// SIG // hNqwiBfenk70lrC8RqBsmNLg1oiMCwIDAQABo4IB7TCC
// SIG // AekwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0OBBYEFEhu
// SIG // ZOVQBdOCqhc3NyK1bajKdQKVMBkGCSsGAQQBgjcUAgQM
// SIG // HgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMB
// SIG // Af8EBTADAQH/MB8GA1UdIwQYMBaAFHItOgIxkEO5FAVO
// SIG // 4eqnxzHRI4k0MFoGA1UdHwRTMFEwT6BNoEuGSWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5j
// SIG // cmwwXgYIKwYBBQUHAQEEUjBQME4GCCsGAQUFBzAChkJo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRz
// SIG // L01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5jcnQw
// SIG // gZ8GA1UdIASBlzCBlDCBkQYJKwYBBAGCNy4DMIGDMD8G
// SIG // CCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL2RvY3MvcHJpbWFyeWNwcy5odG0wQAYI
// SIG // KwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AcABvAGwA
// SIG // aQBjAHkAXwBzAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJ
// SIG // KoZIhvcNAQELBQADggIBAGfyhqWY4FR5Gi7T2HRnIpsL
// SIG // lhHhY5KZQpZ90nkMkMFlXy4sPvjDctFtg/6+P+gKyju/
// SIG // R6mj82nbY78iNaWXXWWEkH2LRlBV2AySfNIaSxzzPEKL
// SIG // UtCw/WvjPgcuKZvmPRul1LUdd5Q54ulkyUQ9eHoj8xN9
// SIG // ppB0g430yyYCRirCihC7pKkFDJvtaPpoLpWgKj8qa1hJ
// SIG // Yx8JaW5amJbkg/TAj/NGK978O9C9Ne9uJa7lryft0N3z
// SIG // Dq+ZKJeYTQ49C/IIidYfwzIY4vDFLc5bnrRJOQrGCsLG
// SIG // ra7lstnbFYhRRVg4MnEnGn+x9Cf43iw6IGmYslmJaG5v
// SIG // p7d0w0AFBqYBKig+gj8TTWYLwLNN9eGPfxxvFX1Fp3bl
// SIG // QCplo8NdUmKGwx1jNpeG39rz+PIWoZon4c2ll9DuXWNB
// SIG // 41sHnIc+BncG0QaxdR8UvmFhtfDcxhsEvt9Bxw4o7t5l
// SIG // L+yX9qFcltgA1qFGvVnzl6UJS0gQmYAf0AApxbGbpT9F
// SIG // dx41xtKiop96eiL6SJUfq/tHI4D1nvi/a7dLl+LrdXga
// SIG // 7Oo3mXkYS//WsyNodeav+vyL6wuA6mk7r/ww7QRMjt/f
// SIG // dW1jkT3RnVZOT7+AVyKheBEyIXrvQQqxP/uozKRdwaGI
// SIG // m1dxVk5IRcBCyZt2WwqASGv9eZ/BvW1taslScxMNelDN
// SIG // MYIEjjCCBIoCAQEwgZUwfjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmlu
// SIG // ZyBQQ0EgMjAxMQITMwAAAQNeJRyZH6MeuAAAAAABAzAJ
// SIG // BgUrDgMCGgUAoIGiMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMCMGCSqGSIb3DQEJBDEWBBTR0a5HlIUC26efLiOR
// SIG // 3wptV7BptTBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBp
// SIG // AGMAcgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBABTPCH38
// SIG // 2vdk3ZaV4UaXSIM2pa7YBcFwYeeB/VJU30JJe6ON+80R
// SIG // EGi+O47+n7seMfdWp/RHZpvWZAowtVRhSvdrF7zmK4RL
// SIG // ur228hnkAK022tkMcV3TyUCMnl73Gf5qSMdSaRgNgQV+
// SIG // 7JcAWZzmBUBtj/4TYxL8NCmCC7pDZYHjXiz64pzd62ge
// SIG // o6K4+3bOTyTSxq8/CkDkpBOISIGc/v/Jnqa4fBZUPhh4
// SIG // roG1dOULoK4H0RvP5z7Ox1zqjSW3bbaCsZ8oSvRSPVoO
// SIG // l1ozWZx+goPBo5Enk2eQ3R5WULOVh7xMVFA17UFlqVzj
// SIG // SKDpeLYg+elb7kp2oIgh6/3cZAGhggIoMIICJAYJKoZI
// SIG // hvcNAQkGMYICFTCCAhECAQEwgY4wdzELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBAhMzAAAA62mqzD4pny05AAAAAADrMAkG
// SIG // BSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcN
// SIG // AQcBMBwGCSqGSIb3DQEJBTEPFw0xODEwMTYwMzA5MjNa
// SIG // MCMGCSqGSIb3DQEJBDEWBBQ2NxgenM1P3p1Uh/mIjH+i
// SIG // FfU7qjANBgkqhkiG9w0BAQUFAASCAQBQBVNxo9qzLjnb
// SIG // +q6Oq+IZwVXwPnR0wbEc1Kyc2y4bUUjvr/fFZXJ0cAnd
// SIG // O9ljNxXgsZMhRXjC6/lwkI7rlc+DWDYBAfWfjU1HcbWD
// SIG // 8/+oEM9UVZppeVK2v6X+DCkfPcb/nW3vso2BBA61i16/
// SIG // KofxaN/ZfLK/+h67MMDNXT1trLDGkJfj1Kf1QLJHjH74
// SIG // eUqhR5vEAE2Ku2i61yOXV+JhshWv6JAgSpnBZpSAyHPo
// SIG // 7VLflAjabbZPX6JVOzFmBZqnI1ISCuqiAAbLoSqIVBwI
// SIG // kDhi9WvZ1k2fM7bZHe/6R7UGqaUCLpWUYCNUJtC9dAdS
// SIG // UlIl2esNK+2CXN8WVG73
// SIG // End signature block
