	package main

import (
    "fmt"
    "net/http"
    "os"
    "sync"
    "time"
)

const (
    defaultAPIEndpoint = "http://example.com/api" // Default API endpoint if not provided via environment variable
    numRequests        = 100
)

func sendRequest(client *http.Client, url string, wg *sync.WaitGroup) {
    defer wg.Done()
    _, err := client.Get(url)
    if err != nil {
        fmt.Printf("Error sending request: %s\n", err)
    }
}

func loadTest(apiEndpoint string) {
    client := &http.Client{}
    var wg sync.WaitGroup
    start := time.Now()

    for i := 0; i < numRequests; i++ {
        wg.Add(1)
        go sendRequest(client, apiEndpoint, &wg)
    }

    wg.Wait()

    elapsed := time.Since(start)
    rps := float64(numRequests) / elapsed.Seconds()
    fmt.Printf("Requests Per Second (RPS): %.2f\n", rps)
}

func main() {
    // Read the API endpoint from environment variable
    apiEndpoint := os.Getenv("API_ENDPOINT")
    if apiEndpoint == "" {
        apiEndpoint = defaultAPIEndpoint
    }

    loadTest(apiEndpoint)
}
