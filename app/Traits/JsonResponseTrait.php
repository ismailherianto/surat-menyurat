<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

trait JsonResponseTrait
{
    /**
     * Send a success response
     *
     * @param mixed $data
     * @param string|null $message
     * @param int $status
     * @return JsonResponse
     */
    protected function success($data = null, ?string $message = null, int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    /**
     * Send an error response
     *
     * @param string $message
     * @param int $status
     * @param mixed|null $errors
     * @return JsonResponse
     */
    protected function error(string $message, int $status = Response::HTTP_BAD_REQUEST, $errors = null): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ], $status);
    }

    /**
     * Send a created response
     *
     * @param mixed $data
     * @param string|null $message
     * @return JsonResponse
     */
    protected function created($data = null, ?string $message = null): JsonResponse
    {
        return $this->success($data, $message ?? 'Resource created successfully', Response::HTTP_CREATED);
    }

    /**
     * Send a no content response
     *
     * @param string|null $message
     * @return JsonResponse
     */
    protected function noContent(?string $message = null): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message ?? 'Resource deleted successfully'
        ], Response::HTTP_NO_CONTENT);
    }
}